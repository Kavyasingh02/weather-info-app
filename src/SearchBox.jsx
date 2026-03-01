import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"

const SearchBox = ({updatedInfo}) => {
    let [city,setCity]=useState("");
    let [error,setError]=useState(false)
    const API_URl="https://api.openweathermap.org/data/2.5/weather";
    const API_Key="9764ba79331c16a72d27619ee1a128f7";

    let getWeatherInfo= async()=>{
    try{
     let response=await fetch(`${API_URl}?q=${city}&appid=${API_Key}&units=metric`);
     let jsonResponse= await response.json();
     console.log(jsonResponse);
     let result={
        city:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,
     };
     console.log(result);
     return result
    } catch(err){
       throw err; 
    }
    }

    let handleChange=(event)=>{
        setCity(event.target.value)
    }

    let handleSubmit=async(event)=>{
        try{
        event.preventDefault();
        setError(false);
        console.log(city);
        setCity("")  ;
        let newInfo=await getWeatherInfo() ;
        updatedInfo(newInfo);
        }catch(err){
        setError(true);
        }
    }
    return (
        <div className='SearchBox'>
           
            <form onSubmit={handleSubmit}>
                <TextField value={city} onChange={handleChange} id="filled-basic" label="City Name" variant="filled" required /><br /><br />
                <Button id="search-btn" type='Submit' variant="contained">
                    Send
                </Button>

                {error && <h4 style={{color:"red"}}>No such place exists!</h4>}
            </form>
        </div>
    )
}

export default SearchBox
