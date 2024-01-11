import axios from 'axios';
const baseURL = process.env.BACKEND_URL;
console.log('baseURL:', baseURL);
console.log('Variáveis de Ambiente:', process.env);

const instance = axios.create({
    baseURL: baseURL,
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
