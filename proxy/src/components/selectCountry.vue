<template>
  <div class="select-country">
    <select class="form-control form-control-sm" @change="onChange">
      <option>Выберите страну</option>
      <option v-for="country in countries" :key="country.item" >{{country.name}} - ({{country.count}})</option>      
    </select>
    <!-- <p v-if="proxyCountryCounter > 0">найдено прокси ({{proxyCountryCounter}})</p> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "selectCountry",
  created() {
    this.$store.dispatch("getCountryList");
  },
  computed: {
    ...mapGetters(["countries", "proxyCountryCounter"])
  },
  methods: {
    onChange(e) {
      let country = e.target.value;
      let countryName = country.split(' ')[0];
      this.$store.dispatch("setCountryPhoxy", countryName);
    }
  }
};
</script>

<style scoped>
.select-country {
  margin-bottom: 10px;
}

.select-country p {
  font-size: 10px;
}
</style>