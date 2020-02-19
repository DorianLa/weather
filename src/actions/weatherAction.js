import axios from 'axios';


// requête Get de http://api.openweathermap.org/data/2.5/weather?q=London&appid=cc08a99a76962840a56efd9df1bfad13
// Axios pour faire la requête
const baseUrl = "http://api.openweathermap.org/data/2.5/";
const appId = "&appid=cc08a99a76962840a56efd9df1bfad13";
export function getWeather(){
    return axios.get(baseUrl+"weather?q=London"+appId);
}

