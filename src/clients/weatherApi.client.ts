import axios from 'axios';
import { WeatherResponse } from '../models/CurrentWeather';
import 'dotenv/config'; 

const apiKey = process.env.WEATHER_API_KEY;

export const getWeather = async (lat : number, lon : number): Promise<WeatherResponse> => {
    const response = await axios.get<WeatherResponse>(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}&aqi=no`);
    return response.data;
};