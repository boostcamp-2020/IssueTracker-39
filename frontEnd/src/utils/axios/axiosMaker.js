import axios from 'axios';
const axiosMaker = () => {
  const instance = axios.create({
    timeout: 1000,
  });
  return instance;
};

export default axiosMaker;
