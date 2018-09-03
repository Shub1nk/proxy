<template>
  <div>
    <h3 v-if="!proxyCountryCounter">Данные появится только после выбора страны</h3>
    <div v-if="proxyCountryCounter > 0" class="data-proxy-item">
      <h2>Подробная информация</h2>
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
      <h4>Что еще можно доработать:</h4>
      <ul class="tasks">
        <ol><span>1. </span>Каждый из фильтров сформировать как отдельный компонент, возможно это решит проблему с дублированием ключей. Альтернативное решение: сделать для каждого фильтра свои состояния в Vuex и передавать в компоненты</ol>
        <ol><span>2. </span>Изменение фона активного пункта работает, но не уверен, что выбран правильный подход работы с компонентной архитектурой <i>(Посмотреть какие еще есть решения)</i></ol>
        <ol><span>3. </span>Сделать рефакторинг: убрать ненужные фрагменты кода, повторяющиеся фрагменты реализовать через функции</ol>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "dataProxy",
  computed: {
    ...mapGetters(["proxyInfo", "proxyCountryCounter"])
  }
};
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

h3 {
  text-align: center;
}

i {
  font-size: 12px;
  color: #999;
}

.tasks {
  height: 200px;
  overflow: auto;
}

.tasks ol {
  padding: 0;
}
</style>