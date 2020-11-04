import axios from 'axios';
const axiosMaker = () => {
  const token = localStorage.getItem('token');
  const instance = axios.create({
    headers: {Authorization: `bearer ${token}`},
    timeout: 1000,
  });
  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status === 401) {
        window.localStorage.removeItem('token');
        //토큰 만료시
        window.location.hash = '/login';
      }
      return Promise.reject(error);
    },
  );
  return instance;
};

export default axiosMaker;
