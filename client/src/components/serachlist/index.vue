<template>
  <div class="serachList">
    <li v-for="(item,index) in list" :key="index" @click="address(item)">
      <h3>{{item.name}}</h3>
      <p>{{item.district}} {{item.address}}</p>
    </li>
  </div>
</template>

<script>
export default {
  name: "Serachlist",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    },
    city: {
      type: String,
      default: ""
    }
  },
  methods: {
    address(item) {
      localStorage.setItem("location", item.district);
      this.$parent.flag = false;
      this.$parent.keyword = "";
      this.$router.push("/index/home");
    }
  }
};
</script>

<style lang="scss" scoped>
.serachList {
  @include wh(100%);
  position: fixed;
  top: 88px;
  background: #f6f6f6;
  li {
    @include wh(100%, 150px);
    border-bottom: 1px solid #cccccc;
    h3 {
      margin-top: 20px;
      margin-left: 20px;
      font-size: 30px;
    }
    p {
      margin-top: 20px;
      font-size: 26px;
      margin-left: 20px;
    }
  }
}
</style>