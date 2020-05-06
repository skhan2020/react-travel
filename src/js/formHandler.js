import { getTimeFromDate, days_between } from '../js/helpers'
import store from '../redux/store'
import { addWeatherData, addCountryImage } from '../redux/country/countryActions'

const DS_API_ID='e0a74fe78340df25f91e2e31baebbc84'
const PIXABAY_API_ID='15171658-12e7fafe9b837537f31c1cadb'

function getWeatherInformation(place, date) {
    const url = `https://api.darksky.net/forecast/${DS_API_ID}/`;
    getGeoNameInfo(place)
    .then(placeDetails => {
        placeDetails && getWeatherData(url, placeDetails, getTimeFromDate(date), place)
    })
    
    const picUrl = `https://pixabay.com/api/?key=${PIXABAY_API_ID}`;
    getPlaceImage(picUrl, place)
    .then(res => {
        if (res && res.imageURLs) {
          store.dispatch(addCountryImage(res.imageURLs));
        }
    })
}

const getGeoNameInfo = async (place) => {
    let searchQuery = encodeURIComponent(place)
    const request = await fetch(`http://api.geonames.org/postalCodeSearchJSON?placename=${searchQuery}&username=skhan2020`);
    try {
      const data = await request.json();
      // return allData;
      if (data.postalCodes && data.postalCodes.length) {
        console.log(data.postalCodes.length);
        return data.postalCodes[0];
      }
      return;
    }
    catch(error) {
      console.log('error',error);
    }
}

/* Function to GET Web API Data*/
const getWeatherData = async (reqUrl, details, time, place) => {
  const currentDate = Date.now();
  const miliSecInweek = 604800000;
  let requestUrl = `${reqUrl}${details.lat},${details.lng}`
  if (time - currentDate > miliSecInweek) {
    requestUrl = `${requestUrl},${time/1000}`
  }
  try {
    const request = await fetch(requestUrl);
    const data = await request.json();
    // return allData;
    const dailyData = data && data.daily && data.daily.data.length && data.daily.data[0];
    const weatherData = {
      minTemp: dailyData.temperatureLow || '',
      maxTemp: dailyData.temperatureHigh || '',
      summary: dailyData.summary || '',
      place: dailyData.placeName || place,
      noOfDay: days_between(time, currentDate) || 0,
    }
    // Save data in server
    store.dispatch(addWeatherData(weatherData));
  }
  catch(error) {
    console.log('error',error);
  }
}

/* Function to GET Web API Data*/
const getPlaceImage = async (reqURL, place) => {
  const requestUrl = `${reqURL}&q=${place}&image_type=photo`
  const request = await fetch(requestUrl);
  try {
    const data = await request.json();
    let images = [];
    if (data.hits.length) {
      images = data.hits.map(item => item.webformatURL);
    }
    return {imageURLs: images};
  }
  catch(error) {
    console.log('error',error);
  }
}

export { getWeatherInformation }
