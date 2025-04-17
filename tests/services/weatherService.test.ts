import { getWeatherNow } from "../../src/services/weatherService";  
import * as weatherApiClient from "../../src/clients/weatherApi.client";
import * as ipService from "../../src/services/ipService";  
import { WeatherResponse } from "../../src/models/CurrentWeather";
import { IpLocation } from "../../src/models/IpLocation";  

// Crear un mock de la respuesta del clima
const mockWeatherResponse: WeatherResponse = {
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

// Crear un mock de la respuesta de la ubicación (IpLocation)
const mockIpLocation: IpLocation = {
  status: "success",
  country: "Peru",
  countryCode: "PE",
  region: "Lima",
  regionName: "Lima",
  city: "Lima",
  zip: "15001",
  lat: -12.0464,
  lon: -77.0428,
  timezone: "America/Lima",
  isp: "ISP Name",
  org: "Organization",
  as: "AS Number",
  query: "190.45.1.1",  // Esta es la IP
};

describe("getWeatherNow", () => {

    afterEach(() => {
      jest.clearAllMocks();
    })
    test("should return weather data when getLocation and getWeather are successful", async () => {
      // Mock de la función getLocation
      jest.spyOn(ipService, "getLocation").mockResolvedValue(mockIpLocation);
  
      // Mock de la función getWeather
      jest.spyOn(weatherApiClient, "getWeather").mockResolvedValue(mockWeatherResponse);
  
      const weather = await getWeatherNow();
  
      expect(weather).toEqual(mockWeatherResponse);
      expect(ipService.getLocation).toHaveBeenCalledTimes(1);  // Asegurarse de que se haya llamado una vez
      expect(weatherApiClient.getWeather).toHaveBeenCalledWith(-12.0464, -77.0428);  // Asegurarse de que se pasó la latitud y longitud correctas
    });
  
    test("should throw error when getLocation fails", async () => {
      // Simular un error en getLocation
      jest.spyOn(ipService, "getLocation").mockRejectedValue(new Error("Location service failed"));
      jest.spyOn(weatherApiClient, "getWeather"); // Mock de getWeather sin que se llame
  
      // Asegurarse de que se lanza el error correcto
      await expect(getWeatherNow()).rejects.toThrow("Unable to fetch weather");

      expect(ipService.getLocation).toHaveBeenCalledTimes(1);  
    
      expect(weatherApiClient.getWeather).not.toHaveBeenCalled();
    });
  
    test("should throw error when getWeather fails", async () => {
      // Simular un error en getWeather
      jest.spyOn(ipService, "getLocation").mockResolvedValue(mockIpLocation);
      jest.spyOn(weatherApiClient, "getWeather").mockRejectedValue(new Error("Weather service failed"));
 
      await expect(getWeatherNow()).rejects.toThrow("Unable to fetch weather");
  
      // Verifica que getLocation haya sido llamado solo una vez
      expect(ipService.getLocation).toHaveBeenCalledTimes(1);  

      expect(weatherApiClient.getWeather).toHaveBeenCalledTimes(1);
    });
  });
  