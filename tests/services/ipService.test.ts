import { get } from "http";
jest.mock("../../src/clients/ipApi.client");
import { getLocation } from "../../src/services/ipService";
import * as ipService from "../../src/services/ipService";  
import { IpLocation } from "../../src/models/IpLocation";
import { getLocationFromIp } from "../../src/clients/ipApi.client";

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

describe("Get location from IP", () => {
  afterEach(() => {
    jest.clearAllMocks();
  })
  it("should fetch location from IP", async () => {
    

    (getLocationFromIp as jest.Mock).mockResolvedValue(mockIpLocation);

    const result = await getLocation();

    expect(result).toEqual(mockIpLocation);
    expect(getLocationFromIp).toHaveBeenCalledTimes(1);
  });

  it ("should throw error when getLocationFromIp fails", async () => {

    (getLocationFromIp as jest.Mock).mockRejectedValue(new Error("Location service failed"));

    await expect(getLocation()).rejects.toThrow("Unable to fetch location");

    expect(getLocationFromIp).toHaveBeenCalledTimes(1);
  });
});