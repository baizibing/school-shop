<template>
  <div class="wrapper">
    <div class="head">
      <span class="iconfont icon-zuojiantou-01" @click="tui"></span>
      <div class="search">
        <i class="iconfont icon-fangdajing"></i>
        <input type="search" @input="change" v-model="searchVal" />
      </div>
      <span class="sear">搜索</span>
    </div>
    <div class="searchs" ref="searchp" v-if="names!==''">
      <p v-for="(item,index) in names" :key="index" @click="searchLis(item)">{{item}}</p>
    </div>
  </div>
</template>
<script>
//先让名字框消失，在input矿中输入内容，下边名字框出现，
//点击名字框内容，名字矿消失，搜索商品，把名字存到local中
export default {
  data() {
    return {
      searchVal: "",
       arr: [],
      names: [],
      flag: false
    };
  },
  methods: {
    async change(e) {
      this.$refs.searchp.style.display = "block";
      await this.$http
        .search({
          search_key: e.target.value
        })
        .then(res => {
          this.names = res.data.data.map(item => {
            return item.name.substring(0, item.name.lastIndexOf(" "));
          });
        });
    },
    searchLis(item) {
      this.$refs.searchp.style.display = "none";
      this.$http
        .search({
          search_key: item
        })
        .then(res => {
          this.$emit("getSearch", res.data.data,item);
          this.arr.unshift(item)
        });
        window.localStorage.setItem("history", JSON.stringify(this.arr));
    },
    tui() {
      this.$router.push("/index/classify");
    }
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  @include wh(100%, 100%);
  border-bottom: 1px solid #ccc;
  .head {
    @include wh(100%, 98px);
    display: flex;
    line-height: 98px;
    align-self: auto;
    .search {
      @include wh(600px, 64px);
      margin-top: 17px;
      position: relative;
      border: 2px solid #ccc;
      line-height: 64px;
      border-radius: 99px;
      i {
        position: absolute;
        left: 30px;
      }
      input {
        @include wh(500px, 40px);
        margin-left: 60px;
        border: none;
        outline: none;
      }
    }
    .icon-zuojiantou-01 {
      display: inline-block;
      width: 60px;
      height: 98px;
      text-align: center;
      font-size: 49px;
      font-weight: 600;
    }
    .sear {
      padding-left: 20px;
    }
  }
}
.searchs {
  width: 100%;
  height: calc(100% - 98px);
  position: absolute;
  top: 98px;
  left: 0;
  z-index: 10;
  display: none;
  p {
    width: 100%;
    height: 90px;
    color: #000;
    font-size: 30px;
    text-align: left;
    line-height: 90px;
    padding-left: 20px;
    z-index: 999;
  }
}
</style>