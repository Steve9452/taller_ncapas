import axios from 'axios';

export const authHeader = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
        return { Authorization: 'Bearer ' + user.accessToken };
    }
    else{
        return {};
    }
}


axios.interceptors.request.use(
    (config) => {
      const headers = authHeader();
      if (headers.Authorization) {
        config.headers = headers;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );