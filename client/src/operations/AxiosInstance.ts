import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL

const AxiosInstance = axios.create({
    baseURL: baseURL || "http://localhost:5000",
    headers: {
       "Content-Type": "application/json"
    }
})

export default AxiosInstance