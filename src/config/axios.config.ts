const axios = require('axios');

export const axiosInstance = axios.create({
    baseURL: 'https://api.weatherapi.com/v1/current.json',
    timeout: 5000
});