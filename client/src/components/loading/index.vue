<!--  -->
<template>
  <div class="loading">
    <div>
      <img src="@/assets/img/sky.gif" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
.loading {
  width: 200px;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -100px;
  border-radius: 20px;
}
div {
  img {
    width: 100px;
    height: 100px;
    margin-left: 50px;
    margin-top: 26px;
  }
  p {
    font-size: 28px;
    color: silver;
    margin-top: 10px;
    text-align: center;
  }
}
</style>