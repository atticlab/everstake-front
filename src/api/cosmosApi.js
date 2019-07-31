
import Axios from 'axios';
import removeTrailingSlash from 'remove-trailing-slash';

const axios = Axios.create({
  baseURL: removeTrailingSlash('https://api.codetabs.com/v1/proxy?quest=https://api.cosmostation.io/v1'),
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default {
  getCosmosStakingData() {
    return axios.get('staking/validators');
  },
};
