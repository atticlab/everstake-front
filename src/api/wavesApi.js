import Axios from 'axios';
import removeTrailingSlash from 'remove-trailing-slash';

const axios = Axios.create({
  baseURL: removeTrailingSlash('http://dev.pywaves.org/lpos'),
  timeout: 30000,
  headers: {
    'Content-Type': 'text/html',
    Accept: 'text/html',
  },
});

export default {
  getWavesHtml() {
    return axios.get('lpos');
  },
};
