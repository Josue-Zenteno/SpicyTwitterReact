import axios from 'axios';
import config from '../config.js';

export default axios.create({
  baseURL: config.baseURL_API
  //baseURL: 'http://localhost:5000'
  //Habría que poner en este package.json la linea (al final mismamente):
  //"proxy": "http://localhost:5000"
});