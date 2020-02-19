import React, { useState, useEffect } from 'react'
// import {mockWeather} from '../mocks/mockWeather';
import { getWeather , getWeatherByCity, getWeatherByCoords } from '../actions/weatherAction';

function Weather() {

    // const[weather, setWeather] = useState(mockWeather);
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState(null);
    // useEffect se lance quand le composant est chargé 
    // => Le state est modifié {géré par [element]}

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(loadWeatherData,errorLoadWeatherData); 
    }, [])

    
    function kelvinToCelsius(tempKelvin) {
        return Math.round(tempKelvin - 273.15);
    }

    async function searchWeatherByCity(){
        const weatherAjaxByCity = await getWeatherByCity(city);
        setWeather(weatherAjaxByCity.data);
    }
//Weather par défaut
    async function loadWeatherData(pos) {
        console.log(pos.coords.latitude);
        console.log(pos.coords.longitude);
        const weatherAjaxCoords = await getWeatherByCoords(pos.coords);
        setWeather(weatherAjaxCoords.data);
    }


    function loadIconWeather(idIcon) {
        return "http://openweathermap.org/img/wn/" + idIcon + "@2x.png";
    }
    
    function handleChange(event){
        setCity(event.target.value);
    }
    async function errorLoadWeatherData(){
        const weatherAjax = await getWeather();
        setWeather(weatherAjax.data)
    }
    

    // function changeCity(city) {
    //     //récupération de la ville de l'input
    //     //change cityName with setCityName
    //     // evt.preventDefault();
    //     console.log(city);
    //     setCity(city);
    // }

    return (
        <div>
              <input type="text" name="name" onChange={handleChange} />
              <input type="button" onClick={searchWeatherByCity} value="Valider"></input>
            {weather != null ?
                <div>
                    <h1>Météo : {weather.name}</h1>
                    {/* <img alt= "" src="http://openweathermap.org/img/wn/10d@2x.png"></img> */}
                    <img alt="" src={loadIconWeather(weather.weather[0].icon)}></img>

                    <p>{weather.weather[0].description}</p>
                    <p>{kelvinToCelsius(weather.main.temp)}C°</p>
                    <p>{weather.main.humidity}%</p>
                    <p>Vitesse du vent :{weather.wind.speed} m/s</p>
                    <p>Température ressenti : {kelvinToCelsius(weather.main.feels_like)} °C</p>
                   
                </div>
                : <div>
                    <h1>Météo en attente de chargement</h1>  
                </div>
            }

        </div>
    )
}

export default Weather

