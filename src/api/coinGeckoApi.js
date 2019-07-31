import Axios from 'axios';
import removeTrailingSlash from 'remove-trailing-slash';

const axios = Axios.create({
  baseURL: removeTrailingSlash('https://api.coingecko.com/api/v3'),
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default {
  getCoinData(id) {
    return axios.get(`/coins/${id}?localization=false&community_data=false&developer_data=false&sparkline=true`);
  },
};
