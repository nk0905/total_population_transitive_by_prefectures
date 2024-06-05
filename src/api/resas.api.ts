import axios from 'axios';

export const resasApi = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'json',
  timeout: 30000,
});
