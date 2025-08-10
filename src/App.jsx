
import './App.css'
import { useState } from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import SearchBox from './components/SearchBox';
import WeatherCard from './components/WeatherCard';


function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleSeach = async() => {
    if(city.trim() === "") return;
    try{
      const res = await fetch(`https://wttr.in/${city}?format=j1`);
      const data = await res.json();
      console.log(data);
     setWeatherData(data);
    }catch(e){
      console.log(e)
      alert(`Something went wrong`);
    }
  };

  return (
   <Container maxWidth="sm" sx={{mt : 5}}>
    <Paper elevation={3} sx={{p:3, textAlign : "center"}}>
      <Typography variant='h4' gutterBottom>
        Weather App
      </Typography>
      <SearchBox
      city={city}
      setCity={setCity}
      onSearch={handleSeach}/>
      <Box>
        {weatherData && <WeatherCard data={weatherData}/>}
      </Box>
    </Paper>
   </Container>
  )
  
}

export default App
