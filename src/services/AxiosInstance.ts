import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

AxiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      const accessToken = JSON.parse(token);

      if (accessToken) {
        if (config.headers) config.headers.token = accessToken;
      }
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);
