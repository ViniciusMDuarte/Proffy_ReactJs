import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.20.40.104:3333'
})

export default api;