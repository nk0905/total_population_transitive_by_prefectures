import axios from 'axios';

export const resasApi = axios.create({
  baseURL: process.env.REACT_APP_RESAS_API_DOMAIN,
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': process.env.REACT_APP_RESAS_API_KEY,
  },
  responseType: 'json',
});
