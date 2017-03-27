<template>
    <div class="sellerHeader">
      <div class="title-wrapper">
          <img class="avatar" width="128" height="128" v-bind:src="seller.avatar">
          <div class="title">
            <div class="sel-name">
              <span class="brand"></span>
              <span>{{seller.name}}</span>
            </div>
            <div class="sel-description">{{seller.description}}/{{seller.deliveryTime}}分鐘送達</div>
            <div class="sel-supports" v-if="seller.supports">
              <div>
                <span class="icon" :class="classMap[seller.supports[0].type]"></span>
                <span class="sel-supports01" >{{seller.supports[0].description}}</span>
              </div>
              <div class="sel-supportNum" @click="detailtoggle()">
                <span class="supp-count" >{{seller.supports.length}} 個</span>
                <i class="icon-keyboard_arrow_right"></i>
              </div>
            </div>
          </div>
      </div>
      <div class="sell-bulletin" @click="detailtoggle()">
        <span class="bulletin"></span>
        <span class="bulletin-text" v-text="seller.bulletin"></span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
      <img class="sellHeadbackground" :src="seller.avatar">
      <div v-if="showDetail" class="sellHeadDetail clearfix">
        <div class="DetailDescription">
          <div class="Detail-name">{{seller.name}}</div>
          <div class="stars" >
            <span v-for="starClass in starClasses" v-bind:class="starClass"></span>
          </div>
          <div class="supports-title">優惠信息</div>
          <ul class="supportDetails" >
            <li class="supportDetail" v-for="item in seller.supports"><span class="icon" :class="classMap[item.type]"></span>{{item.description}}</li>
          </ul>
          <div class="bulletin-title">商家公告</div>
          <div class="bulletin-detail" v-text="seller.bulletin"></div>
        </div>
        <i class="icon-close" @click="detailtoggle()"></i>
      </div>
    </div>

</template>

<script type="text/ecmascript-6">
  import {getscoreStar} from '../../common/js/common.js'
  export default {
    name: 'sellHeader',
    data() {
      return {
        showDetail: false,
        starLenth: 5,
        starsResult: []
      }
    },
    props: {
      seller: {
        type: Object
      }
    },
    created() {
        this.classMap = ['decrease','discount','special','invoice','guarantee'];
    },
    computed: {
        starClasses: function () {
          getscoreStar(this.seller.score,this.starLenth,this.starsResult)
          return this.starsResult
        }
    },
    methods: {
      detailtoggle: function () {
        this.showDetail = !this.showDetail;
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "../../common/sass/scss";

  .sellerHeader {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: rgba(7,17,27,0.5);
    .icon {
      display: inline-block;
      vertical-align: top;
      width: 24px;
      height: 24px;
      @include iconUrl('../../common');
      &.decrease {
        @include baImg('./img/decrease_1');
      }
      &.discount {
        @include baImg('./img/discount_1');
      }
      &.special {
        @include baImg('./img/special_1');
      }
      &.invoice {
        @include baImg('./img/invoice_1');
      }
      &.guarantee {
        @include baImg('./img/guarantee_1');
      }
      background-size: 24px 24px;
      background-repeat: no-repeat;
    }
    color: white;
    .title-wrapper {
      display: flex;
      flex-direction: row;
      margin-top: 48px;
      .avatar {
        margin: 0 32px 36px 48px;
        width: 128px;
        height: 128px;
      }
      .title {
        width: 100%;
        margin: 4px 0;
        font-weight: 200;
        line-height: 24px;
        .sel-name {
          .brand {
            display: inline-block;
            vertical-align: top;
            width: 60px;
            height: 36px;
            @include baImg('./img/brand');
            background-size: 60px 36px;
            background-repeat: no-repeat;
          }
          font-size: 32px;
          font-weight: bold;
          line-height: 36px;
        }
        .sel-description {
          margin: 16px 0 20px 0;
          font-size: 24px;
        }
        .sel-supports {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          font-size: 20px;

          .sel-supportNum {
            background-color: rgba(0,0,0,0.2);
            border-radius: 28px;
            padding: 14px 16px;
            font-size: 20px;
            text-align: center;
            .supp-count {
              margin-right: 4px;
            }
            .icon-keyboard_arrow_right {
              vertical-align: middle;
              line-height: 24px;

            }
          }
        }
      }
    }
    .sell-bulletin {
      position: relative;
      background-color: rgba(7,17,27,0.2);
      padding: 0 52px 0 24px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      .bulletin {
        display: inline-block;
        vertical-align: text-bottom;
        width: 44px;
        height: 24px;
        @include baImg('./img/bulletin');
        background-size: 44px 24px;
        background-repeat: no-repeat;
      }
      .bulletin-text {
        font-size: 20px;
        font-weight: 200;
        line-height: 56px;
      }
      .icon-keyboard_arrow_right {
        position: absolute;
        right: 24px;
        top: 20px;
      }
    }
    .sellHeadbackground {
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      top: 0;
      left: auto;
      filter:blur(10px);

    }
    .sellHeadDetail {
      display: flex;
      flex-direction: column;
      min-height: 60px;
      position: fixed;
      top: 0;
      left: 0;
      overflow: auto;
      width: 100%;
      height: 100%;
      background-color: rgba(7,17,27,0.8);
      text-align: center;
      z-index: 2;
      .DetailDescription {
        flex: 1;
        width: auto;
        padding: 128px 72px 64px;
        font-size: 24px;
        font-weight: 200;
        line-height: 48px;
        .Detail-name {
          font-size: 32px;
          line-height: 32px;
          font-weight: 700;
          margin-bottom: 32px;

        }
        .stars {
          span {
            display: inline-block;
            width: 48px;
            height: 48px;
            line-height: 48px;
            &.fullStar {
              @include baImg('./img/star48_on');
              background-repeat: no-repeat;
            }
            &.halfStar {
              @include baImg('./img/star48_half');
              background-repeat: no-repeat;
            }
            &.empStar {
              @include baImg('./img/star48_off');
              background-repeat: no-repeat;
            }
          }
        }
        .supports-title,.bulletin-title {
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin: 56px 0 48px 0;
          font-size: 28px;
          line-height: 28px;
          font-weight: 700;
          &:before,
          &:after {
            content: ' ';
            margin-right: 24px;
            display: inline-block;
            flex: 1;
            height: 14px;
            border-bottom: 2px solid rgba(255,255,255,0.2);
            vertical-align: 50%;
          }
          &:after {
            margin-left: 24px;
            margin-right: 0;
          }
        }
        ul.supportDetails {
          padding-left: 0;
          text-align: left;
          li.supportDetail {
            margin: 0 24px 24px;
            line-height: 24px;
            .icon {
              margin-right: 12px;
              width: 32px;
              height: 32px;
              background-size: 32px 32px;
              vertical-align: middle;
            }
          }
        }
        .bulletin-detail {
          margin: 0 32px;
          text-align: left;
        }
      }
      i.icon-close {
        margin: 0 auto 64px;
        font-size: 64px;
        color: rgba(255,255,255,0.5);
      }
    }
  }

</style>
