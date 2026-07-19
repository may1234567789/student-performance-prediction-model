import axios from "axios";

const api = axios.create({
    baseURL: "https://student-performance-prediction-model-jyws.onrender.com",
});

export default api;