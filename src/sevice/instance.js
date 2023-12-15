import axios from 'axios';
import {BASE_URL} from './urls';

const Client = axios.create();
Client.defaults.baseURL = BASE_URL;

Client.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

// Add a request interceptor
Client.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);
export {Client};
