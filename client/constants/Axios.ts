import axios from "axios";

const baseURL =
  "https://d36d-2406-7400-75-5bca-96d8-e368-fd85-eba3.ngrok-free.app/";

export default axios.create({
  baseURL: baseURL,
});

export const Axios = axios.create({
  baseURL: baseURL,
});

Axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("idToken"); // Get the token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Attach the token to the headers
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
