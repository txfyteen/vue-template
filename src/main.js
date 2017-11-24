// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import router from './router';
import VueLazyload from 'vue-lazyload';
import store from './store';
import Element from 'element-ui';
import axios from 'axios';

import 'common/scss/main.scss';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

/* eslint-disable no-unused-vars */
/* eslint-disable no-new */

axios.defaults.headers.common['Authorization'] = 'asdf';
// Add a request interceptor
axios.interceptors.request.use(function(config) {
  // Do something before request is sent
  return config;
}, function(error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function(response) {
  // Do something with response data
  return response;
}, function(error) {
  // Do something with response error
  return Promise.reject(error);
});

Vue.use(Element);
Vue.use(VueLazyload, {
  loading: require('common/images/default.png')
});

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
