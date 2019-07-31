import Vue from 'vue';

// Bootstrao vue
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Custom global styles
import './assets/scss/main.scss';

// Sparkline
import sparkline from '@fnando/sparkline';

import VueScrollTo from 'vue-scrollto';

import numeral from 'numeral';

import Meta from 'vue-meta';

import App from './App.vue';
import router from './router';
import store from './store';

// Axios api
import Api from './api';
import CoinGeckoApi from './api/coinGeckoApi';
import tezosApi from './api/tezosApi';
import cosmosApi from './api/cosmosApi';
import irisnetApi from './api/irisnetApi';
import iostApi from './api/iostApi';
import wavesApi from './api/wavesApi';
import eosApi from './api/eosApi';

import i18n from './i18n';

// Use plugins
Vue.use(BootstrapVue);
// Vue.use(VueScrollTo);
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});

Vue.use(Meta);

// Global variables
Vue.prototype.$api = Api;
Vue.prototype.$coinGeckoApi = CoinGeckoApi;
Vue.prototype.$tezosApi = tezosApi;
Vue.prototype.$cosmosApi = cosmosApi;
Vue.prototype.$irisnetApi = irisnetApi;
Vue.prototype.$iostApi = iostApi;
Vue.prototype.$wavesApi = wavesApi;
Vue.prototype.$eosApi = eosApi;
Vue.prototype.$sparkline = sparkline;
Vue.prototype.$numeral = numeral;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
