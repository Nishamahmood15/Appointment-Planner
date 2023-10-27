import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

export const baseURL = `http://localhost:8000/api/`;
// export const baseURL = `http://localhost:8000/api/`;

export const axiosInstance = axios.create({
  baseURL,
});
