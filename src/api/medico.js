import axios from 'axios';

const isLive = false;

const url = isLive
  ? 'https://justconsult.org/medoc_api/api/v1'
  : 'http://127.0.0.1:8000/api/v1';

export default axios.create({
  baseURL: url,
});
