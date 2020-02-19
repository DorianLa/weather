import axios from 'axios';


// requête Get de http://api.openweathermap.org/data/2.5/weather?q=London&appid=cc08a99a76962840a56efd9df1bfad13
// Axios pour faire la requête

export function getWeather(){
    return axios.get("http://api.openweathermap.org/data/2.5/weather?q=London&appid=cc08a99a76962840a56efd9df1bfad13")
}

