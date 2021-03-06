import axios from 'axios';


const API_KEY = 'API_KEY Here';
const URL = 'https://api.openweathermap.org/data/2.5/weather';


export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            appId: API_KEY,
        } 
    });

    return data;

}