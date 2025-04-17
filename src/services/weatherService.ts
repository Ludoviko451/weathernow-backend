import { getWeather } from "../clients/weatherApi.client";
import { WeatherResponse } from "../models/CurrentWeather";
import { getLocation } from "./ipService";

export const getWeatherNow = async (): Promise<WeatherResponse> => {
    try {
        const location = await getLocation();
    
        const weather = await getWeather(location.lat, location.lon);
        return weather;
} catch (error) {
        console.error("Error fetching weather:", error);
        throw new Error("Unable to fetch weather");
    }
}