import axios from 'axios';

// TODO: configurar baseURL con 'https://jsonplaceholder.typicode.com'
// TODO: agregar interceptor de request que lea el token de localStorage
//       y agregue el header Authorization: Bearer [token]

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
