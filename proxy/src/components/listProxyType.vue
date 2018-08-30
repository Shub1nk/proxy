<template>
  <ul class="list-group">
    <!-- <li class="list-group-item active">Cras justo odio</li> -->
    <li
      v-for="itemProxy in proxyCountry" :key="itemProxy.id"
      class="list-group-item"
      :class="{active: isActive}"
      @click="viewCurrentProxy(itemProxy.id)"
      >
        {{ itemProxy.id }}. host: {{itemProxy.host}}
      </li>    
  </ul>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "listProxyType",  
  data () {
    return {
      isActive: false  
  }
    
    
  },
  created() {
    this.$store.dispatch("getProxyList");
  },
  computed: {
    ...mapGetters(["proxyCountry"]),
     
  },
  methods: {
    toggleClass() {
      this.isActive = !this.isActive;
    },
    viewCurrentProxy(id) {
      this.$store.dispatch('setProxyInfo', id)
      // let proxyList = this.$store.getters.listProxy;
      // // console.log(proxyList);

      // let currentProxyInfo = proxyList.find(item => item.id === id);
      // console.log(currentProxyInfo);
    }
  }
};
</script>

<style scoped>
.list-group {
  height: 519px;
  overflow: auto;
}

.list-group-item {
  margin: 0;
  cursor: pointer;
}
</style>