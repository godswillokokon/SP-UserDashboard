import axios from "axios";
import Cookies from "js-cookie";

const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

request.interceptors.request.use((config) => {
  const token = Cookies.getJSON("token");

  if (!token) return config;

  const newConfig = {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    },
  };
  return newConfig;
});

export default request;
