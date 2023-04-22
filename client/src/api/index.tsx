import axios, { AxiosInstance } from 'axios';
import { API_URL } from '../utils/constants';

const axiosInstance: AxiosInstance = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

export default axiosInstance;