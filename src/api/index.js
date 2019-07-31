import Axios from 'axios';
import removeTrailingSlash from 'remove-trailing-slash';

const axios = Axios.create({
  baseURL: removeTrailingSlash('https://docs.google.com/spreadsheets/d'),
  timeout: 30000,
  headers: {
    'Content-Type': 'text/csv',
    Accept: 'text/csv',
  },
});

export default {
  getRewardsPaid() {
    return axios.get('e/2PACX-1vSNHEqc9iJ3ZUuMBobw2oSUNdppPR1-B01D3NHiy8tcNmIHkOrI77IpkH3IvtvmAGhaCFw5HJCikS4s/pub?output=csv');
  },
  getAssetsInControl() {
    return axios.get('e/2PACX-1vQQxH7td8WbZ3a-Lx3kJqmPDOv6c2hS8wP48i65ql4znNPXGbiI89r1UXdV51oBVOQ0IC5UJ9Dpjr53/pub?output=csv');
  },
  getBlocksProduced() {
    return axios.get('e/2PACX-1vS-m7X9wc-OkYY3Q4rH_EKuKcoESplsZBzUutmdCvrGP1lMIEYTmtvxlnXUOdziH9d4TlZIIDe_HC-l/pub?output=csv');
  },
  getTezosRewards() {
    return axios.get('e/2PACX-1vTdGvqriA3m4wV5crc9sZ87oB-8Oo8Fx3-4vFXApjKDYOgsD8a8trtjLXutFs8QFOYLghFHbyir806o/pub?output=csv');
  },
  getIOSTRewards() {
    return axios.get('/e/2PACX-1vRVR3KI_VLhoR_OeyZqKj-uad80o2jTpo97OhDjWfhe7BFDA4gD8Hkzb_X2W3TfJMMCAfK7UKRbxJTa/pub?output=csv');
  },
  getCosmosRewards() {
    return axios.get('/e/2PACX-1vTPLyPCmN0HcBjYiz4bfJAGxrH2IDYsrEIOQMykMr1ptEcLRiSqVLkXj33q2yufxSjP569O6faZuMmU/pub?output=csv');
  },
  getIrisnetRewards() {
    return axios.get('/e/2PACX-1vTbq0eEqqXw6Ew3YzurLk_LVxjQP4ZVR0DDOE1-ZLS5X_JywV0csibcZx_CzwZNkCMp80KSqoFlHuRb/pub?output=csv');
  },
};
