<template>
  <div class="tab">
    <div class="tab-item">
      <router-link to="/goods"> 商品 </router-link>
    </div>
    <div class="tab-item">
      <router-link to="/ratings"> 评价 </router-link>
    </div>
    <div class="tab-item">
      <router-link to="/seller"> 商家 </router-link>
    </div>
  </div>
  <router-vew></router-vew>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'tab'
  }


</script>

<style  lang="scss" scope>

</style>
