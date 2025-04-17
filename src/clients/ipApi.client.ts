
import axios from 'axios';
import { IpLocation } from "../models/IpLocation"

export const getLocationFromIp = async (): Promise<IpLocation> => {
  const response = await axios.get<IpLocation>(`http://ip-api.com/json`);
  return response.data;
};
