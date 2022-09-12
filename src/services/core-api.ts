import axios from 'axios';

export default class CoreApi {
  http = axios.create({ baseURL: '/.netlify/functions/api/' });
}
