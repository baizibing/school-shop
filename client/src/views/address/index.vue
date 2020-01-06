<template>
  <div class="address">
    <div class="head">
      <div class="select">
        <select name='' id='' v-model="city">
          <option value="请选择" selected="selected">请选择</option>
          <option :value="item.value" v-for="(item,index) in selectList" :key="index">{{item.value}}</option>
        </select>
      </div>
      <input type="text" placeholder="小区、街道、大厦" v-model="keyword" />
    </div>
    <p class="posi" @click="add">定位当前位置</p>
    <div v-show="show" class="show">
      <img src="http://samherbert.net/svg-loaders/svg-loaders/puff.svg" alt />
    </div>
    <one-serachlist :list="tips" v-show="flag" :city="city"></one-serachlist>
        <one-box :show.sync="isshow" :pois="pois"></one-box>
    <div class="main">
      <one-addresslist v-for="(item,index) in addressList" :key="index" :list="item"></one-addresslist>
    </div>
    <div class="foot" @click="jump">+新增地址</div>
  </div>
</template>
<script>
import map from "@/plugins/location";
export default {
  data() {
    return {
      keyword: "",
      tips: [],
      flag: false,
      isshow: false,
      pois: [],
      show: false,
      addressList: [],
      city: "请选择",
      selectList: [
        {
          value: "北京"
        },
        {
          value: "上海"
        },
        {
          value: "天津"
        },
        {
          value: "重庆"
        }
      ]
    };
  },
  methods: {
    add() {
      this.show = true;
      map
        .location({
          extensions: "all"
        })
        .then(res => {
          this.pois = res.pois;
          this.$Alert.show("定位成功");
          this.isshow = true;
          this.show = false;
        })
        .catch(() => {
          this.$Alert.show("定位失败");
        });
    },
    jump() {
      this.$router.push("/addAddress");
    }
  },
  watch: {
    keyword(newVal) {
      if (newVal.length > 0) {
        this.flag = true;
        map
          .Autocomplete(newVal, this.city)
          .then(res => {
            this.tips = res.tips;
          })
          .catch(() => {});
      } else {
        this.flag = false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.address {
  @include wh(100%, 100%);
  @include flex();
  flex-direction: column;
  background: #f8f8f8;
}
.show {
  @include wh(100%,70%);
  @include flex();
  justify-content: center;
  img {
    width: 30%;
    align-items: center;
  }
}
.head {
  @include wh(100%, 88px);
  @include flex();
  .select {
    flex: 1;
    select {
      width: 100%;
      height: 100%;
    }
  }
  input {
    font-size: 24px;
    width: 80%;
    outline: none;
    border: 1px solid #ccc;
    text-indent: 2rem;
  }
}
.posi {
  @include wh(100%, 70px);
  line-height: 70px;
  padding-left: 20px;
  margin-top: 22px;
  background: white;
}
.main {
  margin-top: 20px;
  flex: 1;
}
.foot {
  @include wh(100%, 88px);
  font-size: 32px;
  text-align: center;
  line-height: 88px;
}
</style>