import { createStore} from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension';
import countryReducer from './country/countryReducer'

const store = createStore(countryReducer, devToolsEnhancer())

export default store