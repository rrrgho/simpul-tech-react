import axios from "axios";
import { store } from "../Store";

const Client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "multipart/form-data",
    Authorization: `Bearer `,
  },
});

Client.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${
      store.getState().InitialReducer?.access_token
    }`;
    return config;
  },
  (err) => Promise.reject(err)
);

Client.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default Client;
