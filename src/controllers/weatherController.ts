import { getWeatherNow } from "../services/weatherService";

export const getWeathernow = async (req: any, res: any) => {

    try {
        const weather = await getWeatherNow();
        res.json(weather);
    } catch (error) {
    
        res.status(500).json({ error: "Unable to fetch weather" });
    }
}

