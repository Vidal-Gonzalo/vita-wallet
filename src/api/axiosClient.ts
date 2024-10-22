import axios from 'axios';
import { getCredentials } from '../lib/auth';


const axiosClient = axios.create({
    baseURL: import.meta.env?.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'app-name': import.meta.env?.VITE_APP_NAME
    },
});

const credentials = getCredentials()

axiosClient.interceptors.request.use(
    (config) => {
        if (credentials) {
            config.headers['access-token'] = credentials?.accessToken;
            config.headers['uid'] = credentials?.uid
            config.headers['expiry'] = credentials?.expiry
            config.headers['client'] = credentials?.client
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosClient;