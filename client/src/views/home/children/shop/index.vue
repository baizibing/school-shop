<template>
  <div class="shop">
    <div class="head">
      <div class="shop-dl">
        <Scroll>
          <slideDelete
            class="item-dl"
            :id="item.shopid"
            v-for="item in carList"
            :key="item.id"
            :carList="carList"
            :item="item"
          >
            <count
              :title="item.shopdata.name"
              :price="item.shopdata.price"
              :cover="item.shopdata.cover"
              :count="item.count"
              :id="item.shopid"
              :specs="item.shopdata.specs"
              :checked="item.checked"
            ></count>
          </slideDelete>
        </Scroll>
      </div>
    </div>
    <div class="foot">
      <b class="icon_select">
        <span :class="{checkbtn:true,active:checkall}" @click="isCheckAll"></span>全选
      </b>
      <span class="heji">合计:</span>
      <span class="priceAll">
        <span>{{priceAll}}</span>
      </span>
      <span class="btn">
        <span class="qu">去结算</span>
        <span class="go">({{countAll}})</span>
      </span>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import count from "@/components/count/";
import slideDelete from "@/components/slideDelete/";
import Scroll from "@/components/scroll/";
export default {
  name: "ShopCars",
  components: {
    count,
    slideDelete,
    Scroll
  },
  data() {
    return {};
  },
  mounted() {},
  async created() {
    await this.getUserInfo();
    await this.getShopCar("created");
  },
  activated() {
    if (this.userInfo && this.userInfo) {
      this.getShopCar("activated");
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo.data,
      carList: state => state.shopCar.carList,
      checkall: state => state.shopCar.checkall,
      priceAll: state => state.shopCar.priceAll,
      countAll: state => state.shopCar.countAll
    })
  },
  methods: {
    ...mapActions("user", ["getUserInfo"]),
    ...mapActions("shopCar", ["getShopCar"]),
    ...mapMutations("shopCar", ["isCheckAll"])
  }
};
</script>

<style lang="scss" scoped>
.shop {
  @include wh(100%, 100%);
  @include flex;
  flex-direction: column;
  .head {
    flex: 1;
    overflow: auto;
    .shop-dl {
      @include wh(100%, 100%);
      .item-dl {
        @include wh(100%, 200px);
        @include flex;
      }
    }
  }
  .foot {
    @include wh(100%, 100px);
    color: #ff7b38;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    .icon_select {
      @include wh(55%, 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      padding-right: 257px;
      span {
        @include wh(30px, 30px);
        border-radius: 50%;
        display: inline-block;
        border: 2px solid #ccc;
        &.active:before {
          content: "\2714";
          padding-left: 5px;
          color: #fff;
          height: 30px;
          width: 30px;
          border-radius: 50%;
          display: inline-block;
          font-weight: bold;
          background: red;
        }
      }
    }
    .heji {
      @include wh(10%, 100%);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .priceAll {
      padding-right: 20px;
      @include wh(10%, 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
      color: #ff7b38;
    }
    .btn {
      display: inline-block;
      flex: 1;
      height: 100%;
      background: #ff7b38;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
      color: #fff;
      display: flex;
      flex-flow: row;
      .qu {
        @include wh(60%, 100%);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .go {
        @include wh(20%, 100%);
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
// }
</style>