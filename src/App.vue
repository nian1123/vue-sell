<template>
  <div class="container" id="container">
    <sellHeader :seller="sellerData"></sellHeader>
    <!--:seller利用的是prop，可參考文檔中的prop-->
    <div class="tab border-1px">
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
  import axios from 'axios'
  import sellHeader from './components/sellheader/sellheader'

  export default {
    name: 'app',
    components: {
      sellHeader
    },
    data: function(){
      return {
          sellerData: {}
    }
    },
    created: function () {
      axios.get('/api/seller').then((res) => {
          this.sellerData = res.data.data;
      })
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
@import "common/sass/scss";
  .tab {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 80px;
    line-height: 80px;
    &.border-1px {
      @include boder_1px(rgba(7,17,27,0.1));
    }

    .tab-item {
       /*占用剩余空间 */
      flex: 1;
      text-align: center;
      &>a {
        display: block;
        color: rgb(77,85,93);
        font-size: 28px;

      &.router-link-active {
         color: $link-color;
       }
      }
    }

  }
</style>
