import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://grouplibrarymanagmentapi.azurewebsites.net/api',
    withCredentials: true,
});

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        config.headers['Content-Type'] = 'application/json';
        config.headers.accept = '*/*';
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;
