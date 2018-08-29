<template>
  <div class="select-country">
    <select class="form-control form-control-sm">
      <option value="Ru">RU</option>
      <option value="USA">USA</option>
      <option value="DE">DE</option>
      <option value="CH">CH</option>
      <option value="AU">AU</option>
    </select>
  </div>
</template>

<script>
  export default {
    name: 'selectCountry'
  }
</script>

<style scoped>
  .select-country {
    margin-bottom: 10px;
  }
</style>