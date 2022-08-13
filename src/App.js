import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import SearchBox from './components/SearchBox';
import SearchResult from './components/SearchResult';
import WeatherData from './components/WeatherData';

function App() {

  const [lat,setLat] = useState(''); //latitude
  const [lon,setLon] = useState(''); //longitude
  const [cityname,setCityName] = useState('Surat');
  const [toCityNameUrl, setToCityNameUrl] =useState(`http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=3&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
  const [weatherUrl,setWeatherUrl] = useState(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`);
  const [citySearchRes, setCitySearchRes] = useState([]);
  const [showSearchResult, setShowSearchResult] = useState(false);
  const [weatherData,setWeatherData] = useState();

  function searchCityFunc() {
    axios.get(toCityNameUrl).then((res) => {
      console.log(res.data);
      setCitySearchRes(res && res.data);
    })
  }
  
  function getWeatherData() {
    axios.get(weatherUrl).then(res => {
      console.log(res.data);
    })
  }

  return (
    <div className="App">
      {/* <span>Welcome To Know Your Weather</span> */}
        <SearchBox 
          cityname={cityname}
          setCityName={setCityName}
          searchCityFunc={searchCityFunc}
          toCityNameUrl={toCityNameUrl}
          setToCityNameUrl={setToCityNameUrl}
          setShowSearchResult={setShowSearchResult}
        />
        {showSearchResult && 
        <SearchResult 
          citySearchRes={citySearchRes}
          setLat={setLat}
          setLon={setLon}
          setShowSearchResult={setShowSearchResult}
        />}
        {/* {lat} {lon} */}

        <WeatherData
          lat={lat}
          lon={lon}
          getWeatherData={getWeatherData}
          weatherUrl={weatherUrl}
          setWeatherUrl={setWeatherUrl}
        />
    </div>
  );
}

export default App;
