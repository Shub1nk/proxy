<template>
  <div class="data-proxy-item">
    <p><span class="data-proxy-item__props-title">id:</span><span  class="data-proxy-item__props-value">43</span></p>
    <p><span class="data-proxy-item__props-title">host:</span><span  class="data-proxy-item__props-value">52.195.238.34</span></p>
    <p><span class="data-proxy-item__props-title">port:</span><span  class="data-proxy-item__props-value">25148</span></p>
    <p><span class="data-proxy-item__props-title">last_check_time:</span><span  class="data-proxy-item__props-value">2018-08-21</span></p>
    <p><span class="data-proxy-item__props-title">busy_until:</span><span  class="data-proxy-item__props-value">2018-08-21</span></p>
    <p><span class="data-proxy-item__props-title">response_time:</span><span  class="data-proxy-item__props-value">18.131</span></p>
    <p><span class="data-proxy-item__props-title">chargeable:</span><span  class="data-proxy-item__props-value">false</span></p>      
  </div>
</template>

<script>
  export default {
    name: 'dataProxy'
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