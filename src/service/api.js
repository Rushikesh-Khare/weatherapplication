import axios from 'axios';
const API_KEY = 'd282a211ea125249a72cae07ae8c625a';
const URL = 'https://api.openweathermap.org/data/2.5/weather';
export const getData = async(city , country) =>{
    return await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
}