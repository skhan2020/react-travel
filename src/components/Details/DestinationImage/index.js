import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import '../result.scss'

const DestinationImage = () => {
  const [index, setIndex] = useState(0);
  const placeImages = useSelector(state => state.countryImages);
  const imageListLength = placeImages.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index => index < imageListLength - 1 ? index + 1 : 0);
    }, 2000);
    return () => clearInterval(interval);
  }, [imageListLength]);

  if (!placeImages || !placeImages.length) {
    return null;
  }
  return (
      <img className="destinationImage" src={placeImages[index]} alt="destination" />
  )
}

export default DestinationImage; 