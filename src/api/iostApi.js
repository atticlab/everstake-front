import Axios from 'axios';
import removeTrailingSlash from 'remove-trailing-slash';

const axios = Axios.create({
  baseURL: removeTrailingSlash('https://www.iostabc.com/account'),
  timeout: 30000,
  headers: {
    'Content-Type': 'text/html',
    Accept: 'text/html',
  },
});

export default {
  getIostHtml() {
    return axios.get('atticlab?page=1&size=20&sort_by&order=asc');
  },
};
