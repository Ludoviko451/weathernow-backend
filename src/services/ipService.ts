import { getLocationFromIp } from "../clients/ipApi.client";
import { IpLocation } from "../models/IpLocation";

export const getLocation = async (): Promise<IpLocation> => {
  try {
    const response = await getLocationFromIp();

    return response;
  } catch (error) {
    console.error("Error fetching location:", error);
    throw new Error("Unable to fetch location");
  }
};

