interface Condition {
    text: string;
    icon: string;
    code: number;
  }
  
  interface Location {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  }
  
  interface CurrentWeather {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: Condition;
  }
export interface WeatherResponse {
    location: Location;
    current: CurrentWeather;
  }