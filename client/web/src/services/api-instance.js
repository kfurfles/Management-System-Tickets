/* eslint-disable */
import axios from 'axios'

let domain = '';
// if (process.env.NODE_ENV === 'production') {
  // domain = 'https://scsm.metodologiagb.com.br';
// } else{
  domain = 'http://localhost:5000';
// }

export const getDomain = () => domain

export const setDomain = ($domain) => domain = $domain

export const axiosInstance = axios.create({
  baseURL: getDomain(),
  headers:{
    "Content-Type":"application/json"
  }
});

