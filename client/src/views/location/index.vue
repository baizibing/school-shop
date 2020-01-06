<template>
  <div class="location">
    <img
      v-if="show"
      src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4141765175,46982578&fm=26&gp=0.jpg"
      alt
    />
  </div>
</template>
<script>
import map from "@/plugins/location.js";
export default {
  data() {
    return {
      show: true
    };
  },
  mounted() {
    map.location().then(res => {
        this.$Alert.show('定位成功')
        localStorage.setItem("location", res.formattedAddress);
        this.show=false
        this.$router.push('/index/home')
      }).catch(()=>{
          this.$Alert.show('定位失败')
      })
  }
};
</script>

<style lang="scss" scoped>
.location {
  @include wh(100%, 100%);
  display: flex;
  align-items: center;
  img {
    @include wh(100%);
  }
}
</style>