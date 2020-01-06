<template>
  <div class="myFoot">
    <router-link
      :to="item.path"
      v-for="(item,index) in newList"
      :key="index"
      tag="dl"
      active-class="active"
    >
      <div @click="change(item,index)">
        <dt>
          <img class="icon" :src="item.img" alt />
          <img class="active-icon" :src="item.imging" alt />
        </dt>
        <dd class="color">{{item.cont}}</dd>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Foot",
  data() {
    return {
      newList: this.list,
      curIndex: 0
    };
  },
  props: {
    list: {
      type: Array,
      default() {
        return {};
      }
    }
  },
  methods: {
    change(item, index) {
      this.curIndex = index;
      this.newList.map(el => {
        el.flag = false;
        return el;
      });
      item.flag = !item.flag;
    }
  },
  watch: {
    newList: {
      handler(newVal) {
        this.$emit("list:updata", newVal);
      },
      deep: true
    }
  }
};
</script>

<style lang="scss" scoped>
.myFoot {
  @include wh(100%, 98px);
  display: flex;
  font-size: 24px;
  dl {
    flex: 1;
    text-align: center;
    dt {
      @include wh(52px, 52px);
      margin: 0 auto;
      img {
        @include wh(100%);
      }
    }
    dd {
      font-size: 22px;
      margin-top: 6px;
    }
  }
  .active {
    .icon {
      display: none;
    }
    .active-icon {
      display: block;
    }
    .color{
    color:red;
}
  }
}
.icon {
  display: block;
}
.active-icon {
  display: none;
}

</style>