import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://localhost:7295/api', // URL del backend, ajusta el puerto si es necesario
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default apiClient;
