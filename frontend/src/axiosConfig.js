import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://food-explore.onrender.com/',
});

export default instance;
