import React from 'react'
import './result.scss'
import { useSelector } from 'react-redux'
import DestinationImage from './DestinationImage'

const Details = () => {
  const placeData = useSelector(state => state.weatherData);

  return (
    <div className="result">
      <DestinationImage />
      {placeData.place && <div>
        <div className="info">{`${placeData.place} is ${placeData.noOfDay} days away!`}</div> 
        <div className="info">Typical temparature for that time would be:</div>
        <div className="info-sub">{`High ${placeData.minTemp}°   Low ${placeData.maxTemp}°`}</div>
        <div className="info-sub">{placeData.summary}</div>
      </div> }
    </div>
  )
}

export default Details; 