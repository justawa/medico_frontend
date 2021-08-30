import axios from 'axios';

const isLive = true;

let url = isLive
  ? 'https://justconsult.org/medoc_api/api/v1'
  : 'http://127.0.0.1:8000/api/v1';
// console.log('live url..........',url);
export {url};
export default axios.create({
  baseURL: url,
 
});
