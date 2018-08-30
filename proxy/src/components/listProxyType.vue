<template>
  <ul class="list-group">
    <list-proxy-type-item/>
    <!-- <li class="list-group-item active">Cras justo odio</li> -->
      
  </ul>
</template>

<script>
// import { mapGetters } from "vuex";
import listProxyTypeItem from './listProxyTypeItem'

export default {
  name: "listProxyType",  
  components: {
    listProxyTypeItem
  }
};
</script>

<style scoped>
.list-group {
  height: 491px;
  overflow: auto;
}

.list-group-item {
  margin: 0;
  cursor: pointer;
}
</style>