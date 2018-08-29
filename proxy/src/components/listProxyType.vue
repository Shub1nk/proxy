<template>
  <ul class="list-group">
    <!-- <li class="list-group-item active">Cras justo odio</li> -->
    <li
      v-for="itemProxy in listProxy" :key="itemProxy.id"
      class="list-group-item">{{ itemProxy.id }}. host: {{itemProxy.host}}</li>    
  </ul>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "listProxyType",  
  created() {
    this.$store.dispatch("getProxyList");
  },
  computed: {
    ...mapGetters(["listProxy"])   
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
}
</style>