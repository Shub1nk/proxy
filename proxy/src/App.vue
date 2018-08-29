<template>
  <div id="app">
    <p>Test</p>
    <ul id="example-1">
      <li v-for="item in proxy">
    {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      proxy: null
    };
  },
  computed: {
    // proxy ()
  },
  mounted() {
    axios
      .get("https://proxyfordevelopers.com/api/proxies/?format=json")
      .then(response => {
        this.proxy = response.data;
        console.log(this.proxy);
      });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px 10px;
}

a {
  color: #42b983;
}
</style>
