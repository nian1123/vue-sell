<template>
  <div id="app">
    <sellHeader></sellHeader>
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
    <!--router-view为router-link所绑定内容的显示区域-->
    <router-view></router-view>
  </div>
</template>

<script>
  import sellHeader from './components/sellheader/sellheader'

  export default {
    name: 'app',
    components: {
      sellHeader
    }
  }
</script>

<style lang="scss" scope>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .tab {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 40px;
    font-size: 28px;
    line-height: 40px;
    color: rgb(77,85,93);
  }
</style>
