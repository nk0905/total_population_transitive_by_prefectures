import axios from 'axios';

export const resasApi = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'json',
  timeout: 30000,
});

resasApi.interceptors.request.use((config) => {
  return config;
});

resasApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => Promise.reject(error.response?.data),
);
