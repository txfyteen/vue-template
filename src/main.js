// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import router from './router';
import VueLazyload from 'vue-lazyload';
import store from './store';
import Element from 'element-ui';

import 'common/scss/main.scss';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

/* eslint-disable no-unused-vars */
/* eslint-disable no-new */

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
