<template>
  <div class="select-country">
    <select class="form-control form-control-sm" @change="onChange">
      <option>Выберите страну</option>
      <option v-for="country in countries" :key="country.item" >{{country}}</option>
      
    </select>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

  export default {
    name: 'selectCountry',
    created() {
      this.$store.dispatch('getCountryList');
    },
    computed: {
      ...mapGetters(['countries'])
    },
    methods: {
      onChange(e) {        
        let country = e.target.value;
        console.log(country);
        this.$store.dispatch('setCountryPhoxy', country);
      }
    }
  }
</script>

<style scoped>
  .select-country {
    margin-bottom: 10px;
  }
</style>