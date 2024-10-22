import axios from 'axios';
import Cookies from 'js-cookie';

const axiosClient = axios.create({
    baseURL: import.meta.env?.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'app-name': import.meta.env?.VITE_APP_NAME
    },
});


axiosClient.interceptors.request.use(
    (config) => {
        const accessToken = Cookies.get('accessToken');
        const uid = Cookies.get('uid');
        const expiry = Cookies.get('expiry');
        const client = Cookies.get('client');

        if (accessToken && uid && expiry && client) {
            config.headers['access-token'] = accessToken;
            config.headers['uid'] = uid;
            config.headers['expiry'] = expiry;
            config.headers['client'] = client;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosClient;