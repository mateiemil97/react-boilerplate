import axios from "axios";
import { environment } from "../../environmentConfig";

const instance = axios.create({
  baseURL: environment.baseUrl,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      //dispatch(logoutAction())
    }
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      //dispatch(logoutAction())
    }
    return Promise.reject(error);
  }
);

export default instance;
