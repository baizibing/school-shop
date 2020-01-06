<template>
  <div>
    <span :class="gouwus.className" @click="insertBall($event)"></span>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "IconCar",
  data() {
    return {
      show: false
    };
  },
  props: {
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
    insertBall(el) {
      this.$Alert.show("成功加入购物车");
      this.addShop({
        shop_id: this.shopid,
        iscount: true
      });
      this.show = true;
      console.log(this.show, el, "deefrfrgth");
    }
  }
};
</script>
<style scoped lang="scss">
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
// .ball-container {
//   .ball {
//     position: fixed;
//     left: 32px;
//     bottom: 22px;
//     z-index: 900;
//     transform: translate3d(0, 0, 0);
//     transition: all 0.6s cubic-bezier(0.49, -0.29, 0.75, 0.41); //这个很重要，要变成曲线就需要这个贝赛尔曲线
//   }
//   .inner {
//     width: 16px;
//     height: 16px;
//     border-radius: 100%;
//     background: rgb(0, 160, 220);
//     transition: all 0.6s linear;
//     transform: translate3d(0, 0, 0);
//   }
// }
// @keyframes ballfly {
//   0% {
//     transform: translate(0px, 0px) translate(-50%, -50%);
//   }
//   1.67% {
//     transform: translate(1.6667px, 0.01px) translate(-50%, -50%);
//   }
//   3.33% {
//     transform: translate(3.3333px, 0.0401px) translate(-50%, -50%);
//   }
//   5% {
//     transform: translate(5px, 0.0905px) translate(-50%, -50%);
//   }
//   90% {
//     transform: translate(90px, 76.2475px) translate(-50%, -50%);
//   }
//   91.67% {
//     transform: translate(91.6667px, 82.5755px) translate(-50%, -50%);
//   }
//   93.33% {
//     transform: translate(93.3333px, 89.6991px) translate(-50%, -50%);
//   }
//   95% {
//     transform: translate(95px, 100.8338px) translate(-50%, -50%);
//   }
//   96.67% {
//     transform: translate(96.6667px, 112.4074px) translate(-50%, -50%);
//   }
//   98.33% {
//     transform: translate (98.3333px, 127.8848px) translate(-50%, -50%);
//   }
//   100% {
//     transform: translate(100px, 174px) translate(-50%, -50%);
//   }
// }
// .fade-enter-active {
//   animation-name: ballfly;
//   animation-duration: 500ms;
//   animation-delay: 0ms;
//   animation-fill-mode: forwards;
//   animation-timing-function: linear;
//   animation-iteration-count: infinite;
//   transform-origin: 0 0;
// }
// .fade-enter-active {
//   animation-name: ballfly;
//   animation-duration: 500ms;
//   animation-delay: 0ms;
//   animation-fill-mode: forwards;
//   animation-timing-function: linear;
//   animation-iteration-count: 1;
//   //  infinite;
//   transform-origin: 0 0;
// }
// fade-leave {
//   opacity: 0;
// }
</style>