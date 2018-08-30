import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

const state = {
  listProxy: "",
  countries: "",
  proxyInfo: {},
  proxyCountry: []
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

        console.log(countryObj);

        let countryList = Object.keys(countryObj);

        commit("UPDATE_LIST_COUNTRY", countryList);
      });
  },
  setProxyInfo({ commit }, id) {
    let proxyList = state.listProxy;

    console.log(proxyList);

    let currentProxyInfo = proxyList.find(item => item.id === id);
    console.log(currentProxyInfo);
    commit("UPDATE_PROXY_INFO", currentProxyInfo);
  },
  setCountryPhoxy({commit}, country) {
    let listCountryProxy = state.listProxy.filter(item => item.country === country)
    commit("UPDATE_PROXY_COUNTRY", listCountryProxy);
  }
};

const getters = {
  listProxy: state => state.listProxy,
  countries: state => state.countries,
  proxyInfo: state => state.proxyInfo,
  proxyCountry: state => state.proxyCountry

};

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

export default store;
