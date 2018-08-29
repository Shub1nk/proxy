import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

const state = {
  listProxy: "",
  country: ""
};

const mutations = {
  UPDATE_LIST_PROXY(state, payload) {
    state.listProxy = payload;
  }
};

const actions = {
  getProxyList({ commit }) {
    axios
      .get("https://proxyfordevelopers.com/api/proxies/?format=json")
      .then(response => {
        commit("UPDATE_LIST_PROXY", response.data);
      });
    console.log("Перешел в действие");
  }
};

const getters = {
  listProxy: state => state.listProxy
};

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

export default store;
