import React, { useState, useEffect } from 'react'
import {validateData} from '../../js/helpers'
import { getWeatherInformation } from '../../js/formHandler'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addWeatherData, addCountryImage } from '../../redux/country/countryActions'
import './landing.scss'

const Landing = () => {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState(new Date());
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClear = event => {
    event.preventDefault()
    setDestination('');
    setDate('');
  }

  const handleSubmit = event => {
    event.preventDefault()
    handleClear(event, true)

    if (!validateData(destination, date)) {
        return;
    }
    // make calls to get country information
    getWeatherInformation(destination, date);
    history.push('/info');
  }

  const handleDestinationChange = event => {
    event.preventDefault()
    setDestination(event.target.value);
  }

  const handleDateChange = event => {
    event.preventDefault()
    setDate(event.target.value);
  }
  useEffect(() => {
    dispatch(addWeatherData({}));
    dispatch(addCountryImage([]));
  }, [dispatch] );

  return (
      <div className="main">
        <form>
          <div className="holder">
              <label >Trip To:</label>
              <input type="text" className="place" 
                value={destination}
                placeholder="Enter destination" onChange={handleDestinationChange}/>
          </div>
          <div className="holder feel">
              <label >Departing:</label>
              <input type="text" className="departDate" 
                onChange={handleDateChange}
                placeholder="mm/dd/yyyy" />
          </div>
          <div className="buttonBox">
              <button className="save" type="submit" onClick={handleSubmit} onSubmit={handleSubmit}> Save Trip </button>
              <button className="remove" type="reset" onClick={handleClear}> Remove Trip </button>
          </div>
        </form>
        <div className="placeImage"></div>
    </div>
  )
}

export default Landing;