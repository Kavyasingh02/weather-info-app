import React, { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'

const Weather = () => {
    let [weatherInfo, setWeatherInfo]=useState({
        city:"Delhi",
        feelsLike:24.84,
        temp:25.05,
        temMin:25.05,
        tempMax:25.05,
        humidity:27,
        weather:"haze",
    });

    let updatedInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
  return (
    <div style={{textAlign:"center"}}>
        <h2>Weather App</h2>
      <SearchBox updatedInfo={updatedInfo}></SearchBox>
      <InfoBox info={weatherInfo}></InfoBox>
    </div>
  )
}

export default Weather
