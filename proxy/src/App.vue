<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <select-country/>
        <list-proxy-type/>
      </div>
      <div class="col-md-8">
        <data-proxy/>    
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import selectCountry from "./components/selectCountry";
import dataProxy from "./components/dataProxy";
import listProxyType from "./components/listProxyType";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "app",
  created() {
    this.$store.dispatch("getProxyList");    
  },
  components: {
    selectCountry,
    dataProxy,
    listProxyType
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

body {
  background: #2c3e50;
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

.container {
  background: #fff;
  height: 800px;
  border-radius: 5px;
  margin: 20px auto;
}

.col-md-4 {
  border-right: 1px solid rgba(0, 0, 0, 0.125);
  min-height: 600px;
}

.col-md-8,
.col-md-4 {
  padding: 20px;
}

@media screen and (max-width: 770px) {
  .col-md-8,
  .col-md-4 {
    width: 100%;
    clear: both;
    background: #fff;
    display: block;
  }

  .container {
    min-height: 1080px;
    margin-bottom: 20px;
  }
}
</style>
