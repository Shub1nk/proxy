<template>
  <div v-if="proxyCountryCounter > 0" class="data-proxy-item">
    <p><span class="data-proxy-item__props-title">id:</span><span  class="data-proxy-item__props-value">{{proxyInfo.id}}</span></p>
    <p><span class="data-proxy-item__props-title">host:</span><span  class="data-proxy-item__props-value">{{proxyInfo.host}}</span></p>
    <p><span class="data-proxy-item__props-title">port:</span><span  class="data-proxy-item__props-value">{{proxyInfo.port}}</span></p>
    <p><span class="data-proxy-item__props-title">country:</span><span  class="data-proxy-item__props-value">{{proxyInfo.country}}</span></p>
    <p><span class="data-proxy-item__props-title">alive:</span><span  class="data-proxy-item__props-value">{{proxyInfo.alive}}</span></p>
    <p><span class="data-proxy-item__props-title">last_check_time:</span><span  class="data-proxy-item__props-value">{{proxyInfo.last_check_time}}</span></p>
    <p><span class="data-proxy-item__props-title">busy_until:</span><span  class="data-proxy-item__props-value">{{proxyInfo.busy_until}}</span></p>
    <p><span class="data-proxy-item__props-title">proxy_type:</span><span  class="data-proxy-item__props-value">{{proxyInfo.proxy_type}}</span></p>
    <p><span class="data-proxy-item__props-title">response_time:</span><span  class="data-proxy-item__props-value">{{proxyInfo.response_time}}</span></p>
    <p><span class="data-proxy-item__props-title">chargeable:</span><span  class="data-proxy-item__props-value">{{proxyInfo.chargeable}}</span></p>      
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

  export default {
    name: 'dataProxy',
    computed: {
      ...mapGetters(["proxyInfo", 'proxyCountryCounter'])
    }
  }
</script>

<style scoped>
.data-proxy-item p {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 10px;
}

.data-proxy-item p:nth-child(even) {
  background: #eee;
}

.data-proxy-item__props-title {
  width: 25%;
  text-align: right;
  font-weight: bold;
}

.data-proxy-item__props-value {
  width: 70%;
  text-align: left;
}


</style>