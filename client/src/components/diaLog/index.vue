<template>
  <div class="dialog" :style="getStyle(option.width,option.height,option.top,option.right,option.bottom,option.left)" ref="dialog">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Dialog",
  props: {
    option: {
      type: Object,
      default() {
        return {};
      }
    },
    alert: {
      type: Boolean,
      default: false
    },
    phone:{
      type:String,
      default(){
         return "13412341234"
           }
    }
  },
  methods: {
    getStyle(w, h,t,r,b,l) {
      if(t==0&&r==0){
        return `width:${w};height:${h};top:${t};right:${r}`;
      }else if(l==0&&t==0){
        return `width:${w};height:${h};top:${t};left:${l}`;
      }else{
        return `width:${w};height:${h};top:${t};left:${l};right:${r};bottom${b}`;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.dialog {
  background: white;
  position: fixed;
  z-index: 200;
  overflow: auto;

}
</style>