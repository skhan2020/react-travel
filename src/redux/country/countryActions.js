export const ADD_WEATHER_DATA = "ADD_WEATHER_DATA";
export const ADD_COUNTRY_IMAGE = "ADD_COUNTRY_IMAGE";
export const ADD_COUNTRY_DATA = "ADD_COUNTRY_DATA";

export function addWeatherData(weatherData) {
  return {
    type: ADD_WEATHER_DATA,
    payload: weatherData
  }
}

export function addCountryImage(images) {
  return {
    type: ADD_COUNTRY_IMAGE,
    payload: images
  }
}