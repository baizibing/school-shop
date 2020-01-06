<template>
  <div>
    <dl :class="options.dl" v-for="item in lists" :key="item.id" @click="detail(item)">
      <dt :class="options.dt">
        <img :src="item.cover" alt />
        <div class="meijia">
          <span class="meijiahead">
            <span>每家</span>
            <span>福利</span>
          </span>
          <span class="meijiafoot"></span>
          <span class="sanjiaoa"></span>
          <span class="sanjiaob"></span>
        </div>
      </dt>
      <dd :class="options.dd">
        <p>{{item.name}}</p>
        <p>
          <span>累计1.5万份</span>/
          <span>已拼13份</span>
        </p>
        <span>自营</span>
        <p>
          ￥
          <span>{{item.price}}</span>
        
          <span class="iconfont icon-gouwuche" @click.stop="insertBall"></span>
        </p>
      </dd>
    </dl>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "RightList",
  data() {
    return {};
  },
  props: {
    lists: {
      type: Array,
      // default() {
      //   return {};
      // }
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    },
    shopid: {
      type: Number
    },
    gouwus: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    ...mapActions("shopCar", ["addShop"]),
    detail(item) {
        console.log(item)
      this.$router.push({name:"detail",params:{id:item.id,uid:item.category_id,typeId:item.type_id}});
    },
    _drop(target) {
      // 在goods.vue定义 _drop方法将cartcontrol的传递过来target对象再传递给shopCart
      this.$nextTick(() => {
        // 使用$nextTick优化体验
        this.$refs.shopCart.drop(target); // 父组件goods通过.$refs属性访问shopCart子组件的drop方法
      });
    },
    insertBall() {
      this.$Alert.show("成功加入购物车");
      this.addShop({
        shop_id: this.shopid,
        iscount: true
      });
      this.show = true;
    }
  }
};
</script>
<style scoped lang="scss">
.ctt_dl {
  width: 100%;
  height: 250px;
  border-top: 1px solid #ccc;
  display: flex;
  .ctt_dl_dt {
    flex: 4;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      padding: 10px;
    }
  }
}
.searchDl {
  width: 50%;
  height: 500px;
  display: inline-block;
  border: 1px solid #ccc;
  .searchDt {
    width: 80%;
    height: 50%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      padding: 10px;
    }
  }
  .searchDd {
    width: 80%;
    height: 50%;
    font-size: 35px;
    padding-left: 20px;
    font-size: 35px;
    clear: both;
    p:nth-child(1) {
      font-weight: 600;
      font-size: 30px;
      height: 80px;
      line-height: 40px;
    }
    p:nth-child(2) {
      font-size: 18px;
      color: #ccc;
      height: 40px;
      line-height: 40px;
    }
    // p:nth-child(3) {
    //   width: 80px;
    //   height: 40px;
    //   background: red;
    //   color: #fff;
    //   text-align: center;
    //   line-height: 40px;
    //   border-radius: 15px;
    //   font-size: 16px;
    // }
    p:nth-child(4) {
      height: 50px;
      line-height: 50px;
      margin-top: 20px;
      font-size: 14px;
      color: red;
      position: relative;
      span:nth-child(1) {
        color: red;
        font-size: 35px;
      }
      span:nth-child(2) {
        color: #ccc;
        font-size: 20px;
        text-decoration: line-through;
      }
    }
  }
}
.ctt_dl_dd {
  flex: 6;
  margin-top: 20px;
}
.meijia {
  width: 60px;
  height: 110px;
  position: absolute;
  top: 20px;
  left: 20px;
  overflow: hidden;
  z-index: 6;
}
.meijiahead {
  display: inline-block;
  width: 60px;
  height: 70px;
  background: #ff4036;
  z-index: 6;
  span {
    display: block;
    text-align: center;
    line-height: 35px;
    color: #fff;
    font-size: 20px;
  }
}
.meijiafoot {
  display: inline-block;
  width: 60px;
  height: 40px;
  opacity: 0;
  position: relative;
  z-index: 6;
}
.sanjiaoa {
  width: 0px;
  height: 0px;
  border: 40px solid;
  border-color: #ff4036 transparent transparent transparent;
  position: absolute;
  left: -40px;
  bottom: -35px;
  z-index: 2;
}
.sanjiaob {
  width: 0px;
  height: 0px;
  border: 40px solid;
  border-color: #ff4036 transparent transparent transparent;
  position: absolute;
  right: -40px;
  bottom: -35px;
  z-index: 2;
}
.ctt_dl_dd {
  flex: 6;
  margin-top: 20px;
}
.ctt_dl_dd {
  font-size: 35px;
  clear: both;
  p:nth-child(1) {
    font-weight: 600;
    font-size: 30px;
    height: 80px;
    line-height: 40px;
  }
  p:nth-child(2) {
    font-size: 18px;
    color: #ccc;
    height: 40px;
    line-height: 40px;
  }
  p:nth-child(3) {
    width: 80px;
    height: 50px;
    background: red;
    color: #fff;
    text-align: center;
    line-height: 50px;
    border-radius: 15px;
    font-size: 16px;
  }
  p:nth-child(4) {
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    color: red;
    position: relative;
    span:nth-child(1) {
      color: red;
      font-size: 35px;
    }
    span:nth-child(2) {
      color: #ccc;
      font-size: 20px;
      text-decoration: line-through;
    }
  }
}
.icon-gouwuche {
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 20px;
  background: red;
  color: #fff;
  border-radius: 30px;
  position: absolute;
  top: 10px;
  right: 30px;
}
</style>