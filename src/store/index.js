import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import Home from './moudles/home';
Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  getters,
  modules:{
    Home,
  }
})

