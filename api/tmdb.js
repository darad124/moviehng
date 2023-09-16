import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

instance.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params['api_key'] = API_KEY;
  return config;
});

export default instance;
