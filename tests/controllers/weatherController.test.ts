import { getWeathernow } from "../../src/controllers/weatherController";
import * as weatherService from "../../src/services/weatherService";

// Crear un mock de la respuesta
const mockWeatherResponse = {
  location: {
    name: "Lima",
    region: "Lima",
    country: "Peru",
    lat: -12.0464,
    lon: -77.0428,
    tz_id: "America/Lima",
    localtime_epoch: 1615124735,
    localtime: "2025-04-17 10:45",
  },
  current: {
    last_updated_epoch: 1615124735,
    last_updated: "2025-04-17 10:45",
    temp_c: 25,
    temp_f: 77,
    is_day: 1,
    condition: {
      text: "Sunny",
      icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
      code: 1000,
    },
  },
};

describe("weatherController", () => {
  test("return weather", async () => {
    // Mock de getWeatherNow para simular respuesta exitosa
    jest.spyOn(weatherService, "getWeatherNow").mockResolvedValue(mockWeatherResponse);

    const req = {}; 
    const res = {
      json: jest.fn()
    };

    await getWeathernow(req, res as any);
    expect(res.json).toHaveBeenCalledWith(mockWeatherResponse);
  });

  test("return error", async () => {
    // Mock para forzar un error
    jest.spyOn(weatherService, "getWeatherNow").mockRejectedValue(new Error("Service down"));

    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await getWeathernow(req, res as any);
    expect(res.status).toHaveBeenCalledWith(500);
    
    expect(res.json).toHaveBeenCalledWith({ error: "Unable to fetch weather" });
  });
});
