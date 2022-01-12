import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '45e4cd27b3a3764b2df7c6045a12d189'

export const getData = async(city,country)=>{
    return await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
}

