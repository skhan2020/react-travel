import { ADD_WEATHER_DATA, ADD_COUNTRY_IMAGE } from './countryActions';

const initialState = {
  weatherData: {},
  countryImages: [],
}

const countryReducer = (state = initialState, action) => {
  switch(action.type) {
      case ADD_WEATHER_DATA: {
        return Object.assign({}, state, {
          weatherData: action.payload
        })
      }
      case ADD_COUNTRY_IMAGE: {
        return Object.assign({}, state, {
          countryImages: action.payload
        })
      }
      default: return state;
  }
}

export default countryReducer;