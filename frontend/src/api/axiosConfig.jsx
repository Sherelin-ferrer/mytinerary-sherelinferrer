import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api/itineraries',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor para manejar errores
axiosInstance.interceptors.response.use(
  response => response.data,
  error => {
    console.error('Axios Error:', error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;