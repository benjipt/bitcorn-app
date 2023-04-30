const isDevelopment = import.meta.env.MODE === 'development';

export const BASE_URL = isDevelopment
  ? 'http://localhost:3000/'
  : 'https://bitcorn-chain.herokuapp.com/';
