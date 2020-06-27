import React from 'react';
import Loader from 'react-loader-spinner'
import './LoadingSpinner.scss';


const LoadingSpinner = () => {
  const darkColor = '#343a40'
  return (
    <Loader
         className="spinner" 
         type="TailSpin"
         color={darkColor}
         width={30}
         height={30}
    />
  )
}

export default LoadingSpinner;