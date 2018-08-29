<template>
  <div class="select-country">
    <select class="form-control form-control-sm">
      <option v-for="country in countries" :key="country.item">{{country}}</option>
      
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
      
    }
  }
</script>

<style scoped>
  .select-country {
    margin-bottom: 10px;
  }
</style>