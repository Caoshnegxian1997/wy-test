import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import './mock/mock-server'

import Header from './components/Header/header.vue'


Vue.component('Header',Header)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h=>h(App),
  router,
  store,

})
