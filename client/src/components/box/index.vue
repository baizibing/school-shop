<template>
<transition name="fullscreen">
  <div class="alertBox" @click="remove" v-show="show">
      <div class="box">
          <li v-for="(item,index) in pois" :key="index" @click="change(item)">
            <h3>{{item.name}}</h3>
            <p>{{item.type}} {{item.address}}</p>
          </li>
      </div>
  </div>
</transition>
</template>
<script>
export default {
  name: "Box",
  methods: {
    remove() {
      this.$emit("update:show", false);
    },
    change(item) {
      localStorage.setItem("location", item.name);
      this.$router.push("/index/home");
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    pois: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.alertBox {
  @include wh(100%, 100%);
  top: 0;
  left: 0;
  position: fixed;
  z-index: 100;
  background: rgba(0, 0, 0, 0.2);
  .box {
    background: white;
    bottom: 0;
    left: 0;
    position: absolute;
    @include wh(100%, auto);
    max-height: 80%;
    overflow: auto;
    li {
      @include wh(100%, 150px);
      border-bottom: 1px solid #666666;
      h3 {
        margin-top: 20px;
        margin-left:20px;
        font-size: 28px;
      }
      p {
        margin-top: 20px;
        margin-left:20px;
        font-size: 24px;
      }
    }
  }
  .slide-fade-enter-active {
    tr.fullscreen-enter{
  animation:fullscreen-dialog-fade-in .3s ease;
}
.fullscreen-leave{
  animation:fullscreen-dialog-fade-out .3s ease forwards;
}
.fullscreen-enter-active{
  animation:fullscreen-dialog-fade-in .3s ease
}
.fullscreen-leave-active{
  animation:fullscreen-dialog-fade-out .3s ease forwards
}

@keyframes fullscreen-dialog-fade-in {
  0% {
    transform: translate3d(0, 100%, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes fullscreen-dialog-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, 100%, 0);
    opacity: 1;
  }
}
ansition: all 0.3s;
  }
  .slide-fade-leave-active {
    transition: all 0.3s;
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateY(-100%);
  }
}
</style>