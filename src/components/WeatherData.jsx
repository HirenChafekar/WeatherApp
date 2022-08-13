import React, { useEffect } from 'react';

const WeatherData = ({lat,lon,WeatherData,weatherUrl,setWeatherUrl,getWeatherData}) => {
    useEffect(() => {
        setWeatherUrl(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`)
    }, [lat,lon])

    useEffect(() => {
        getWeatherData();
    },[weatherUrl])
    return(
        <div>
            Weather Data Received
        </div>
    );
}

export default WeatherData;