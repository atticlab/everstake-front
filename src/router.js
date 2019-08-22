import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/tezos',
      name: 'tezos',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Tezos.vue'),
    },
    {
      path: '/dash',
      name: 'dash',
      component: () => import('./views/Dash.vue'),
    },
    {
      path: '/qtum',
      name: 'qtum',
      component: () => import('./views/Qtum.vue'),
    },
    {
      path: '/decred',
      name: 'decred',
      component: () => import('./views/Decred.vue'),
    },
    {
      path: '/cosmos',
      name: 'cosmos',
      component: () => import('./views/Cosmos.vue'),
    },
    {
      path: '/iost',
      name: 'iost',
      component: () => import('./views/IOST.vue'),
    },
    {
      path: '/waves',
      name: 'waves',
      component: () => import('./views/Waves.vue'),
    },
    {
      path: '/irisnet',
      name: 'irisnet',
      component: () => import('./views/Irisnet.vue'),
    },
    {
      path: '/eos',
      name: 'eos',
      component: () => import('./views/EOS.vue'),
    },
    {
      path: '/etherZero',
      name: 'etherZero',
      component: () => import('./views/EtherZero.vue'),
    },
    {
      path: '/ark',
      name: 'ark',
      component: () => import('./views/Ark.vue'),
    },
    {
      path: '/iotex',
      name: 'iotex',
      component: () => import('./views/Iotex.vue'),
    },
    {
      path: '/harmony',
      name: 'harmony',
      component: () => import('./views/Harmony.vue'),
    },
    {
      path: '/algorand',
      name: 'algorand',
      component: () => import('./views/Algorand.vue'),
    },
    {
      path: '/nkn',
      name: 'nkn',
      component: () => import('./views/NKN.vue'),
    },
    {
      path: '/staking',
      name: 'staking',
      component: () => import('./views/StakingPage.vue'),
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: () => import('./views/Analytics.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});
