<template>
  <div>
    <list-proxy-type-item/>
  </div>
</template>

<script>
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