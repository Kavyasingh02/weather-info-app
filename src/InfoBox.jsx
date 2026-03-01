import React from 'react'
import "./InfoBox.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const InfoBox = ({info}) => {
    let intial_url="https://images.unsplash.com/photo-1592210454359-9043f067919b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    let hot_url="https://images.unsplash.com/photo-1652442808708-6511a4e51e8e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let cold_url="https://plus.unsplash.com/premium_photo-1670347627514-07a3d37e0670?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    let rainy_url="https://images.unsplash.com/photo-1641673132450-e757bb9fa1c9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
   
  return (
    <div className='InfoBox'>
        <div className='cardContainer'>

         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?rainy_url:(info.temp>15)?hot_url:cold_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}&nbsp;{info.humidity>80?<ThunderstormIcon></ThunderstormIcon>:(info.temp>15)?<SunnyIcon></SunnyIcon>:<AcUnitIcon></AcUnitIcon>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <div>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}</p>
          <p>Max Temp = {info.tempMax}</p>
          <p>The weather can describe as <i>{info.weather}</i> and feels like <i>{info.feelsLike}</i>&deg;C</p></div>
        </Typography>
      </CardContent>
    </Card>

         </div>


    </div>
  )
}

export default InfoBox
