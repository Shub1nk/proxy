import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

const state = {
  listProxy: "",
  countries: "",
  proxyInfo: {},
  proxyCountry: [],
  proxyCountryCounter: 0
};

const mutations = {
  UPDATE_LIST_PROXY(state, payload) {
    state.listProxy = payload;
  },
  UPDATE_LIST_COUNTRY(state, payload) {
    state.countries = payload;
  },
  UPDATE_PROXY_INFO(state, payload) {
    state.proxyInfo = payload;
  },
  UPDATE_PROXY_COUNTRY(state, payload) {
    state.proxyCountry = payload;
  },
  UPDATE_PROXY_COUNTRY_COUNTER(state, payload) {
    state.proxyCountry = payload;
  },
};

const actions = {
  getProxyList({ commit }) {
    axios
    .get("proxy.json")
      .then(response => {
        commit("UPDATE_LIST_PROXY", response.data);
      });
  },
  getCountryList({ commit }) {
    axios
      // .get("https://proxyfordevelopers.com/api/proxies/?format=json")
      .get("proxy.json")
      .then(response => {
        let countryObj = {};
        let proxyList = response.data;

        // let keyKol = proxyList.reduce((countryObj, key) => {
          // countryObj[key] = (countryObj[key] || 0) + 1;
          // return countryObj;
        // });
// 
        // console.log(keyKol);

        for (let i = 0; i < proxyList.length; i++) {
          let key = proxyList[i].country;
          countryObj[key] = true;
          // countryObj[key] += 1;
        }

        let countryList = Object.keys(countryObj);

        commit("UPDATE_LIST_COUNTRY", countryList);
      });
  },
  setProxyInfo({ commit }, id) {
    let proxyList = state.listProxy;

    let currentProxyInfo = proxyList.find(item => item.id === id);
    commit("UPDATE_PROXY_INFO", currentProxyInfo);
  },
  setCountryPhoxy({commit}, country) {
    let listCountryProxy = state.listProxy.filter(item => item.country === country)
    commit("UPDATE_PROXY_COUNTRY", listCountryProxy);
  },
  // setProxyCountryCounter({commit}) {
  //   let counter = state.proxyCountry.length;
  //   console.log(counter);
  //   commit('UPDATE_PROXY_COUNTRY_COUNTER', counter);
  // }
};

const getters = {
  listProxy: state => state.listProxy,
  countries: state => state.countries,
  proxyInfo: state => state.proxyInfo,
  proxyCountry: state => state.proxyCountry,
  proxyCountryCounter: state => state.proxyCountry.length

};

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

export default store;
