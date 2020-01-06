<template>
  <div
    class="slide"
    :style="{
      height:height+'px'
  }"
    @touchstart="touchstart"
    @touchmove="touchmove"
    @touchend="touchend"
    ref="slide"
  >
    <div :style="{transform: `translateX(${pos.movex}px)`}" class="slide-box">
      <slot></slot>
    </div>
    <div
      class="slide-btn"
      :style="{
        height:height+'px',
        right:`${-80-pos.movex}px`
    }"
      @click="delShopCar"
    >删除</div>
  </div>
</template>
<script>
import { mapActions, mapMutations } from "vuex";
export default {
  props: {
    height: {
      type: Number
    },
    id: {
      type: String
    },
    item: {
      type: Object
    },
    carList: {
      type: Array
    }
  },
  components: {},
  data() {
    return {
      pos: {
        startx: 0,
        starty: 0,
        movex: 0,
        movey: 0,
        curx: 0,
        cury: 0
      }
    };
  },
  computed: {},
  methods: {
    ...mapActions("shopCar", ["delShop"]),
    ...mapMutations("shopCar", ["setdelShop"]),
    touchstart(e) {
      let { clientX: x, clientY: y } = e.touches[0];
      this.pos.startx = x;
      this.pos.starty = y;
    },
    touchmove(e) {
      let { clientX: x, clientY: y } = e.touches[0];
      this.pos.curx = x;
      this.pos.cury = y;
    },
    touchend() {
      let movex = this.pos.curx - this.pos.startx;
      let movey = this.pos.cury - this.pos.starty;
      const slide = this.$refs["slide"];
      if (Math.abs(movey) > 10) {
        return;
      }
      if (movex > 20) {
        this.pos.movex = 0;
      }
      if (movex < 20) {
        document.querySelectorAll(".slide").forEach(item => {
          if (slide !== item) {
            item.querySelector(
              ".slide-box"
            ).style.transform = `translateX(0px)`;
            item.querySelector(".slide-btn").style.right = "-80px";
          }
        });
        this.pos.movex = -80;
        slide.querySelector(".slide-box").style.transform = `translateX(${
          this.pos.movex
        }px)`;
        slide.querySelector(".slide-btn").style.right = `${-80 -
          this.pos.movex}px`;
      }
    },
    // 删除商品
    async delShopCar() {
      await this.setdelShop(this.id);
      await this.delShop(this.id);
      let num = this.carList.indexOf(this.item);
      this.carList.splice(num, 1);
    }
  },

  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.slide {
  @include wh(100%);
  position: relative;
  overflow: hidden;
  div {
    transition: all 0.2s linear;
  }
  .slide-btn {
    position: absolute;
    background: red;
    color: #fff;
    color: #fff;
    font-size: 30px;
    width: 130px;
    top: 0;
    right: -80px;
    line-height: 200px;
    text-align: center;
  }
}
</style>