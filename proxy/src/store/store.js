import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

const state = {
  listProxy: "",
  countries: ""
};

const mutations = {
  UPDATE_LIST_PROXY(state, payload) {
    state.listProxy = payload;
  },
  UPDATE_LIST_COUNTRY(state, payload) {
    state.countries = payload;
  }
};

const actions = {
  getProxyList({ commit }) {
    axios
      .get("https://proxyfordevelopers.com/api/proxies/?format=json")
      .then(response => {
        commit("UPDATE_LIST_PROXY", response.data);
      });
  },
  getCountryList({ commit }) {
    axios
      .get("https://proxyfordevelopers.com/api/proxies/?format=json")
      .then(response => {

        let countryObj = {};
        let proxyList = response.data;

        for (let i = 0; i < proxyList.length; i++) {
          let key = proxyList[i].country;
          countryObj[key] = true;
        }

        let countryList = Object.keys(countryObj);

        commit("UPDATE_LIST_COUNTRY", countryList);
      });
  }
};

const getters = {
  listProxy: state => state.listProxy,
  countries: state => state.countries
};

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

export default store;
