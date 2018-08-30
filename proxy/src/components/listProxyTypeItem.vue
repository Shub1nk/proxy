<template>
  <div>
    <h4>proxy_type по убыванию</h4>
    <li
      v-for="itemProxy in proxyType" :key="itemProxy.id"
      class="list-group-item"
      :class="{active: isActive}"
      @click="viewCurrentProxy(itemProxy.id)"
      >
        id-{{ itemProxy.id }}. host: {{itemProxy.host}} proxy_type = {{itemProxy.proxy_type}}
    </li>  
    
    <h4>alive == true</h4>
    <li
      v-for="itemProxy in alive" :key="itemProxy.id"
      class="list-group-item"
      :class="{active: isActive}"
      @click="viewCurrentProxy(itemProxy.id)"
      >
        id-{{ itemProxy.id }}. host: {{itemProxy.host}} alive = {{itemProxy.alive}}
    </li>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "listProxyTypeItem",
  data() {
    return {
      isActive: false,      
    };
  },
  created() {
    this.$store.dispatch("getProxyList");
  },
  computed: {
    ...mapGetters(["proxyCountry"]),
    proxyType() {
      let proxyType2 = this.proxyCountry.filter(item => item.proxy_type === 2);
      let proxyType1 = this.proxyCountry.filter(item => item.proxy_type === 1);
      let proxyType0 = this.proxyCountry.filter(item => item.proxy_type === 0);
      let proxyTypeNull = this.proxyCountry.filter(item => item.proxy_type === undefined);
      return [...proxyType2, ...proxyType1, ...proxyType0, ...proxyTypeNull];
    },
    alive() {
      let isAlive = this.proxyCountry.filter(item => item.alive === true);
      return isAlive;
    }
  },
  methods: {    
    viewCurrentProxy(id) {
      // this.isActive = !this.isActive;
      this.$store.dispatch("setProxyInfo", id);
    }
  }
};
</script>

<style scoped>
h4 {
  text-align: center;
}

p {
  font-weight: bold;
}

li {
  font-size: 12px;
}
</style>