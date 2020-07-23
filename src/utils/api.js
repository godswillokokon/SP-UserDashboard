import axios from "axios";
import { store } from "../store";
import parseError from "../utils/ParseError";
import { toastError } from "../utils/Toast";

import Auth from "../helpers/auth";

const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

request.interceptors.request.use((config) => {
  // const {
  //   auth: { Auth },
  // } = store.getState();

  if (!Auth?.token) return config;

  const newConfig = {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${Auth.token}`,
      "content-type": "application/json",
    },
  };
  return newConfig;
});

// Add a response interceptor
request.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // Do something with response error
    console.error({ error });
    if (error.response && error.response.status === 401) {
      store.dispatch(Auth.logout());
    }
    const errorMessage = parseError(error);
    toastError(errorMessage);
    return Promise.reject(error);
  }
);

export default request;
