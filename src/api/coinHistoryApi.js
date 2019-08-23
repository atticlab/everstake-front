import Axios from 'axios';
import removeTrailingSlash from 'remove-trailing-slash';

const axios = Axios.create({
  baseURL: removeTrailingSlash('https://analytics.everstake.one/api/0.1/'),
  timeout: 30000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
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
    return axios.get(`/stats/${coin}/blocks?period=${period}&date_from=${datefrom}&date_to=${dateto}`);
  },
  createdAddresses(coin, period, datefrom, dateto) {
    return axios.get(`/stats/${coin}/account/created?period=${period}&date_from=${datefrom}&date_to=${dateto}`);
  },
  activeAddresses(coin, period, datefrom, dateto) {
    return axios.get(`/stats/${coin}/account/active?period=${period}&date_from=${datefrom}&date_to=${dateto}`);
  },
  totalAddresses(coin, period, datefrom, dateto) {
    return axios.get(`/stats/${coin}/account/total?period=${period}&date_from=${datefrom}&date_to=${dateto}`);
  },
  txCount(coin, period, datefrom, dateto) {
    const postBody = {
      period,
      date_from: datefrom,
      date_to: dateto,
    };
    return axios.post(`/stats/${coin}/transactions/count`, JSON.stringify(postBody));
  },
  txVolume(coin, period, datefrom, dateto) {
    const postBody = {
      period,
      date_from: datefrom,
      date_to: dateto,
    };
    return axios.post(`/stats/${coin}/transactions/volume`, JSON.stringify(postBody));
  },
};
