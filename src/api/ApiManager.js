import axios from 'axios';

const ApiManager = axios.create({
  baseURL: 'https://sodainagar.com/cms/app/v1/api/',
  responseType: 'json',
  withCredentials: true,
});

export default ApiManager;
