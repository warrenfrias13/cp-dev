import Vue from 'vue';
import './core/filters'
import router from './core/router';
import {store} from './core/store'

import App from './App';

new Vue({
  render: h => h(App),
  store: store,
  components: {
    App
  },
  router
}).$mount('#app')
