import React, { useState, useEffect } from 'react'
// import {mockWeather} from '../mocks/mockWeather';
import { getWeather } from '../actions/weatherAction';

function Weather() {

    // const[weather, setWeather] = useState(mockWeather);
    const [weather, setWeather] = useState(null);


    // useEffect se lance quand le composant est chargé 
    // => Le state est modifié {géré par [element]}

    useEffect(() => {
        loadWeatherData();
    }, [])

    function kelvinToCelsius(tempKelvin) {
        return Math.round(tempKelvin - 273.15);
    }

    async function loadWeatherData() {
        const weatherAjax = await getWeather();
        console.log(weatherAjax.data);
        setWeather(weatherAjax.data);
    }


    function loadIconWeather(idIcon) {
        return "http://openweathermap.org/img/wn/" + idIcon + "@2x.png";
    }
    return (
        <div>
            {weather ?
                <div>
                    <h1>Météo : {weather.name}</h1>
                    {/* <img alt= "" src="http://openweathermap.org/img/wn/10d@2x.png"></img> */}
                    <img alt="" src={loadIconWeather(weather.weather[0].icon)}></img>

                    <p>{weather.weather[0].description}</p>
                    <p>{kelvinToCelsius(weather.main.temp)}C°</p>
                </div>
                : <div>
                    <h1>Météo en attente de chargement</h1>
                </div>
            }

        </div>
    )
}

export default Weather

