
<template>
  <div ref="scrollbox" class="scrollwrap">
      <div>
          <slot></slot>
      </div>
  </div>
</template>
<script>
import BScroll from "better-scroll"
export default {
    name:"Scroll",
    props:{
        options:{
            default(){
                return {
                    scrollY:true,
                    probeType:0,
                    pullUpLoad:false
                }
            }
        }
    },
    data(){
      return {
          bsScroll:null,
          pageid:0
      }
    },
    mounted(){
      this.$nextTick(()=>{
          this._initScroll()
      })
    },
    methods:{
        _initScroll(){
            if(!this.$refs.scrollbox){
                return
            }
           this.bsScroll = new BScroll(this.$refs.scrollbox,{
               click:true,
               tap:true,
               ...this.options
            })
            //触发滚动事件
            if(this.options.probeType>1){
                this.scroll();
            }
            //触发上拉加载
            if(this.options.pullUpLoad){
                this.upload()
            }
        },
        scroll(){
           this.bsScroll && this.bsScroll.on("scroll",(e)=>{
               this.$bus.$emit("scroll",e);
           })
        },
        upload(){
            this.bsScroll && this.bsScroll.on("pullingUp",()=>{
                this.$emit("pullUpLoad",this._getPromise())
            })
        },
        _getPromise(){
            return new Promise((resolve)=>{
                //定时器 因为会有异步操作延迟
                //触发上拉加载  定时器 返回 promise对象-操作异步
                setTimeout(()=>{
                  this.pageid++
                   resolve(this.pageid)
                   this.bsScroll.finishPullUp()
                },0)
            })
        },
        destory(){
          this.bsScroll.refresh && this.bsScroll.destory()
        },
        refresh(){
            this.bsScroll.refresh && this.bsScroll.refresh()
        }
    },
    destoryed(){
        this.destory()
    }
}
</script>
<style lang="scss" scoped>
.scrollwrap{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>

