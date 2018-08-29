import Vue from "Vue";
import Vuex from "Vuex";
import axios from "axios";

const state = {
  listProxy: 'хуек'
};

const mutations = {
  UPDATE_LIST_PROXY(state, payload) {
    state.listProxy = payload;
  }
};

const actions = {
  getProxyList({commit}) {
    axios
      .get("https://proxyfordevelopers.com/api/proxies/?format=json")
      .then(response => {
        commit('UPDATE_LIST_PROXY', response.data);
        // state.listProxy = response.data;
        // console.log(state.listProxy);
      });
  }
};

// getTasksList({ commit }) {
//   commit('UPDATE_TASKS_LIST', state.tasksList); 

const getters = {
  // listProxy: state => state.listProxy
};

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

export default store;
