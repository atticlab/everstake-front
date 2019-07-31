import Axios from 'axios';
import removeTrailingSlash from 'remove-trailing-slash';

const axios = Axios.create({
  baseURL: removeTrailingSlash('https://api1.tzscan.io/v1'),
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default {
  getTezosTotalStake() {
    return axios.get('staking_balance/tz1MXFrtZoaXckE41bjUCSjAjAap3AFDSr3N');
  },
  getTezosTotalRolls(yesterday) {
    return axios.get(`context_stats/${yesterday}`);
  },
};
