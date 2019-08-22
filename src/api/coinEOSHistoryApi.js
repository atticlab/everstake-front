import Axios from 'axios';
import removeTrailingSlash from 'remove-trailing-slash';

const axios = Axios.create({
  baseURL: removeTrailingSlash('http://blange.cf'),
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default {
  /*
    parameters: period (hour, day, week, month, year),
               date_from (timestamp in millisecond),
               date_to (timestamp in millisecond)
   */
  getBlocks(coin, period, datefrom, dateto) {
    return axios.get(`/stats/blocks?period=${period}&date_from=${datefrom}&date_to=${dateto}`);
  },
  createdAddresses(period, datefrom, dateto) {
    return axios.get(`/stats/accounts/created?period=${period}&date_from=${datefrom}&date_to=${dateto}`);
  },
  activeAddresses(coin, period, datefrom, dateto) {
    return axios.get(`/stats/accounts/active?period=${period}&date_from=${datefrom}&date_to=${dateto}`);
  },
  totalAddresses(coin, period, datefrom, dateto) {
    return axios.get(`/stats/accounts/total?period=${period}&date_from=${datefrom}&date_to=${dateto}`);
  },
  txVolume(coin, period, datefrom, dateto) {
    const postBody = {
      period,
      coin: ["eos"],
      date_from: datefrom,
      date_to: dateto,
    };
    return axios.post(`/stats/${coin}/transactions`, JSON.stringify(postBody));
  },
};
