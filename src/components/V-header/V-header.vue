<template>
    <div class="Vheader ">
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
    name: 'Vheader',
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

  .Vheader {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: rgba(7,17,27,0.5);
    .icon {
      display: inline-block;
      vertical-align: top;
      width: 12px;
      height: 12px;
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
      background-size: 12px 12px;
      background-repeat: no-repeat;
    }
    color: white;
    .title-wrapper {
      display: flex;
      flex-direction: row;
      margin-top: 24px;
      .avatar {
        margin: 0 16px 18px 24px;
        width: 64px;
        height: 64px;
      }
      .title {
        width: 100%;
        margin: 2px 0;
        font-weight: 200;
        line-height: 12px;
        .sel-name {
          .brand {
            display: inline-block;
            vertical-align: top;
            width: 30px;
            height: 18px;
            @include baImg('./img/brand');
            background-size: 30px 18px;
            background-repeat: no-repeat;
          }
          font-size: 16px;
          font-weight: bold;
          line-height: 18px;
        }
        .sel-description {
          margin: 8px 0 10px 0;
          font-size: 12px;
        }
        .sel-supports {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          font-size: 10px;

          .sel-supportNum {
            background-color: rgba(0,0,0,0.2);
            border-radius: 14px;
            padding: 7px 8px;
            font-size: 10px;
            text-align: center;
            .supp-count {
              margin-right: 2px;
            }
            .icon-keyboard_arrow_right {
              vertical-align: middle;
              line-height: 12px;

            }
          }
        }
      }
    }
    .sell-bulletin {
      position: relative;
      background-color: rgba(7,17,27,0.2);
      padding: 0 26px 0 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      .bulletin {
        display: inline-block;
        vertical-align: text-bottom;
        width: 22px;
        height: 12px;
        @include baImg('./img/bulletin');
        background-size: 22px 12px;
        background-repeat: no-repeat;
      }
      .bulletin-text {
        font-size: 10px;
        font-weight: 200;
        line-height: 28px;
      }
      .icon-keyboard_arrow_right {
        position: absolute;
        right: 12px;
        top: 10px;
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
      min-height: 30px;
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
        padding: 64px 36px 32px;
        font-size: 12px;
        font-weight: 200;
        line-height: 24px;
        .Detail-name {
          font-size: 16px;
          line-height: 16px;
          font-weight: 700;
          margin-bottom: 16px;

        }
        .stars {
          span {
            display: inline-block;
            width: 24px;
            height: 24px;
            line-height: 24px;
            &.fullStar {
              @include baImg('./img/star48_on');
              background-repeat: no-repeat;
              background-size: 24px 24px ;
            }
            &.halfStar {
              @include baImg('./img/star48_half');
              background-repeat: no-repeat;
              background-size: 24px 24px ;
            }
            &.empStar {
              @include baImg('./img/star48_off');
              background-repeat: no-repeat;
              background-size: 24px 24px ;
            }
          }
        }
        .supports-title,.bulletin-title {
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin: 28px 0 24px 0;
          font-size: 14px;
          line-height: 14px;
          font-weight: 700;
          &:before,
          &:after {
            content: ' ';
            margin-right: 12px;
            display: inline-block;
            flex: 1;
            height: 7px;
            border-bottom: 2px solid rgba(255,255,255,0.2);
            vertical-align: 50%;
          }
          &:after {
            margin-left: 12px;
            margin-right: 0;
          }
        }
        ul.supportDetails {
          padding-left: 0;
          text-align: left;
          li.supportDetail {
            margin: 0 12px 12px;
            line-height: 12px;
            .icon {
              margin-right: 6px;
              width: 16px;
              height: 16px;
              background-size: 16px 16px;
              vertical-align: middle;
            }
          }
        }
        .bulletin-detail {
          margin: 0 16px;
          text-align: left;
        }
      }
      i.icon-close {
        margin: 0 auto 32px;
        font-size: 32px;
        color: rgba(255,255,255,0.5);
      }
    }
  }

</style>
