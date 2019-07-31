import Axios from 'axios';
import removeTrailingSlash from 'remove-trailing-slash';

const axios = Axios.create({
  baseURL: removeTrailingSlash('https://www.irisplorer.io/api'),
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default {
  getIrisnetUptime() {
    return axios.get('stake/candidate/iva1as5xxstv0kaay3dppuwau0mvyrxcqkad4vfzya/status');
  },
  getIrisnetRate() {
    return axios.get('stake/candidate/iva1as5xxstv0kaay3dppuwau0mvyrxcqkad4vfzya');
  },
  getIrisnetAccount() {
    return axios.get('account/iva1as5xxstv0kaay3dppuwau0mvyrxcqkad4vfzya');
  },
};
