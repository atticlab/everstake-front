import Axios from 'axios';
// import removeTrailingSlash from 'remove-trailing-slash';

const axios = Axios.create({
  // baseURL: removeTrailingSlash('https://docs.google.com/spreadsheets/d'),
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default {
  getCurrentBp() {
    return axios.get('https://eosbp.atticlab.net/v1/chain/get_info');
  },
  // getEosPrice() {
  //   return axios.get('https://api.binance.com/api/v3/ticker/price?symbol=EOSUSDT');
  // },
  // requestEosStats() {
  //   return axios.post('https://eosbp.atticlab.net/v1/chain/get_currency_stats',
  //     { symbol: 'EOS', code: 'eosio.token' });
  // },
};
