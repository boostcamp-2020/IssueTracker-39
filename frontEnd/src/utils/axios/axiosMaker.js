import axios from 'axios';
const axiosMaker = () => {
  const instance = axios.create({
    timeout: 1000,
  });
  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status === 401) {
        window.localStorage.removeItem('token');
        window.location.assign('/');
      }
      return Promise.reject(error);
    },
  );
  return instance;
};

export default axiosMaker;
