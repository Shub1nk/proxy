<template>
  <div>
    <h4 v-if="proxyCountryCounter > 0">proxy_type по убыванию</h4>
    <ul class="list-group filter__proxy_type">
      <li
        v-for="itemProxy in proxyType" :key="itemProxy.id"
        :class="{active: itemProxy.isActive, 'list-group-item': true}"
        @click="viewCurrentProxy(itemProxy, $event)"
        >
          <b>id:</b> {{ itemProxy.id }} <b>host:</b> {{itemProxy.host}} <b>proxy_type</b> = {{itemProxy.proxy_type}}
      </li>  
    </ul>
    <h4 v-if="proxyCountryCounter > 0"><input ref="isAlive" v-model="aliveStatus" type="checkbox" checked="checked"> alive</h4>
    <ul class="list-group filter__alive">
      <li
        v-for="item in alive" :key="item.id"
        :class="{active: item.isActive, 'list-group-item': true}"
        @click="viewCurrentProxy(item, $event)"
        >
          <b>id:</b> {{ item.id }} <b>host:</b> {{item.host}} <b>alive</b> = {{item.alive}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "listProxyTypeItem",
  created() {
    this.$store.dispatch("getProxyList");
  },
  data() {
    return {
      aliveStatus: true
    }
  },
  computed: {
    ...mapGetters(["proxyCountry", "proxyCountryCounter"]),
    //TODO: Реализовать нормальные метод сортировки
    proxyType() {
      let proxyType2 = this.proxyCountry.filter(item => item.proxy_type === 2);
      let proxyType1 = this.proxyCountry.filter(item => item.proxy_type === 1);
      let proxyType0 = this.proxyCountry.filter(item => item.proxy_type === 0);
      let proxyTypeNull = this.proxyCountry.filter(
        item => item.proxy_type === undefined
      );
      return [...proxyType2, ...proxyType1, ...proxyType0, ...proxyTypeNull];
    },
    alive() {
      let isAlive = this.proxyCountry.filter(item => item.alive === this.aliveStatus);
      return isAlive;
    }
    //---------------------------------------------------
  },
  methods: {
    viewCurrentProxy(itemProxy, e) {
      //Посмотреть может в Vue.js другой подход создания активных пунктов
      document
        .querySelectorAll("li")
        .forEach(item => item.classList.remove("active"));
      e.target.classList.add("active");
      this.$store.dispatch("setProxyInfo", itemProxy.id);
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
  cursor: pointer;
}

.filter__proxy_type,
.filter__alive {
  height: 302px;
  overflow: auto;
  margin-bottom: 10px;
}
</style>