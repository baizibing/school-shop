<template>
  <dl>
    <dt>
      <span :class="{active:checked}" @click="isChecked"></span>
      <img :src="cover" alt>
    </dt>
    <dd>
      <h3>{{title}}</h3>
      <span>规格：三件套</span>
      <div class="price">
        <div>￥{{price}}</div>
        <button class="minute" @click="btn_add(true)">-</button>
        <input class="input" :value="count">
        <button class="add" @click="btn_add(false)">+</button>
      </div>
    </dd>
  </dl>
</template>
<script>
import { mapActions, mapMutations, mapState } from "vuex";
import { debounce } from "@/mixins/events";
export default {
  name: "Count",
  data() {
    return {};
  },
  components: {},
  props: {
    title: {
      type: String,
      default() {
        return {};
      }
    },
    price: {
      type: Number,
      default() {
        return {};
      }
    },
    cover: {
      type: String,
      default() {
        return {};
      }
    },
    count: {
      type: Number,
      default() {
        return {};
      }
    },
    specs: {
      type: String,
      default() {
        return {};
      }
    },
    id: {
      type: String,
      default() {
        return {};
      }
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo.data
    })
  },
  methods: {
    ...mapActions("shopCar", ["addShop", "disShop", "delShop"]),
    ...mapActions("user", ["getUserInfo"]),
    ...mapMutations("shopCar", ["oneCheck"]),
    // 如果有括号会执行 里面的函数 如果不加小括号 执行外面的函数
    btn_add: debounce(function(type) {
      if (type) {
        if (this.count <= 1) {
          this.$Alert.show("亲亲，不能在减了哦~");
        } else {
          this.disShop({
            shop_id: this.id, //传给payload
            user_id: this.userInfo.uid
          });
        }
      } else {
        this.addShop({
          shop_id: this.id, //传给payload
          user_id: this.userInfo.uid
        });
      }
    }, 1000),
    // 单选
    isChecked() {
      this.oneCheck({
        shop_id: this.id
      });
    }
  }
};
</script>

<style lang='scss' scoped>
dl {
  @include wh(100%, 200px);
  @include flex;
  dt {
    @include wh(35%, 100%);
    background: #fff;
    @include flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    position: relative;
    span {
      border-radius: 50px;
      @include wh(30px, 30px);
      -webkit-border-radius: 50px;
      -moz-border-radius: 50px;
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
    img {
      @include wh(60%, 60%);
    }
  }
  dd {
    flex: 1;
    background: #fff;
    h3 {
      font-size: 28px;
      padding-top: 25px;
    }
    span {
      display: inline-block;
      font-size: 28px;
      margin-top: 10px;
      color: #999;
    }
    .price {
      @include flex;
      div {
        line-height: 16px;
        color: #f2270c;
        font-size: 35px;
        margin-top: 10px;
        font-weight: bold;
        padding-top: 15px;
        @include wh(60%, 100%);
      }
      button {
        @include wh(40px, 40px);
        background: #eee;
        border-radius: 50%;
        line-height: 40px;
        font-size: 28px;
        margin-left: 20px;
      }
      .input {
        display: inline-block;
        @include wh(40px, 40px);
        line-height: 4px;
        text-align: center;
        background: #ccc;
        font-size: 19px;
        border: none;
        margin-left: 10px;
      }
    }
  }
}
</style>

