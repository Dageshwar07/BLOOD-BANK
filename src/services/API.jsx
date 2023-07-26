import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:4000/api/v1' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem("token")) {
        req.headers.Authorization = `Bearer ${localStorage.getItem("token")} `;
    }
    return req;
});

export default API;
