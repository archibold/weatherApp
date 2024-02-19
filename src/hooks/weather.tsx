import { useState, useEffect } from 'react';
import WeatherInterface from '@/interfaces/weather';

export default function GetWeather(): WeatherInterface | null {
    let [weatherData, setWeatherData] = useState<WeatherInterface | null>(null)

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
            } else {
            console.log("Geolocation is not supported by this browser.");
    }

    function showPosition(position: GeolocationPosition) {
        const lat = position.coords.latitude || 0;
        const long = position.coords.longitude || 0;

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=7b69a009cfec965d9e13d43c29313bc5`)
        .then(response => response.json())
        .then(data => {
            setWeatherData({
                iconURL: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                name: data.name,
                temp: data.main.temp,
                pressure: data.main.pressure,
                windSpeed: data.wind.speed,
                windDeg: data.wind.deg,
                clouds: data.clouds.all,
                sunriseTime: new Date(data.sys.sunrise*1000).toLocaleTimeString(),
                sunsetTime: new Date(data.sys.sunset*1000).toLocaleTimeString(),

            });
        })
        .catch(error => console.error(error));
    }
    }, [])

    return weatherData;

}