<template>
  <div>
    <!-- <h4 v-if="proxyCountryCounter > 0">proxy_type по убыванию</h4> -->
    <div class="center" v-if="proxyCountryCounter > 0">
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="S" v-model="proxy_type" aria-checked="checked">
        <label class="form-check-label" for="inlineRadio1">Sort</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="-S" v-model="proxy_type">
        <label class="form-check-label" for="inlineRadio2">-Sort</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="0" v-model="proxy_type">
        <label class="form-check-label" for="inlineRadio3">0</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="1" v-model="proxy_type">
        <label class="form-check-label" for="inlineRadio4">1</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="2" v-model="proxy_type">
        <label class="form-check-label" for="inlineRadio5">2</label>
      </div>
      <!-- <p>{{proxy_type}}</p> -->
      <!-- <div class="btn-group mr-2" role="group" aria-label="First group"> -->
        <!-- <input type="radio" value="-S" v-model="proxy_type"> -->
        <!-- <label>-S</label> -->
        <!-- <input type="radio" value="S" v-model="proxy_type"> -->
        <!-- <label>S</label> -->
        <!-- <input type="radio" value="0" v-model="proxy_type"> -->
        <!-- <label>0</label> -->
        <!-- <input type="radio" value="1" v-model="proxy_type"> -->
        <!-- <label>1</label> -->
        <!-- <input type="radio" value="2" v-model="proxy_type"> -->
        <!-- <label>2</label> -->
        <!-- <span>{{proxy_type}}</span> -->
      <!-- </div> -->
    </div>    
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
      aliveStatus: true,
      proxy_type: "S"
    };
  },
  computed: {
    ...mapGetters(["proxyCountry", "proxyCountryCounter"]),
    //TODO: Реализовать нормальные методы сортировки
    proxyType() {
      if (this.proxy_type !== "S" && this.proxy_type !== "-S") {
        return this.proxyCountry.filter(item => item.proxy_type === Number(this.proxy_type));
      } else if (this.proxy_type === "S") {
        return this.proxyCountry.sort((a, b) => {
            return Number(b.proxy_type) - Number(a.proxy_type);
        });
      } else {
        return this.proxyCountry.sort((a, b) => {
            return Number(a.proxy_type) - Number(b.proxy_type);
        });
      }
    },
    alive() {
      let isAlive = this.proxyCountry.filter(
        item => item.alive === this.aliveStatus
      );
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

.center {
  text-align: center;
  margin-bottom: 10px;
}
</style>