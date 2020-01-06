<template>
    <div class="classify">
    <div class="header">
      <p class="head" @click="searchBtn">
        <span class="iconfont icon-fangdajing"></span>
        <input type="text" placeholder="搜索校园超市商品" />
      </p>
    </div>
    <div class="content" v-if="l_list.length">
      <ul class="ctt_uli">
        <li
          v-for="(item,index) in l_list"
          :key="item.id"
          :class="{active:index===num}"
          @click="lbtn(index,item.id)"
        >{{item.title}}</li>
      </ul>
      <div class="ctt_cont">
        <p class="ctt_cont_tit">
          <span class="ctt_cont_all" @click="lbtn(num,lid)"  :class="{actions:indexs===nums}">全部</span>
          <ul class="ctt_cont_uls">
            <li v-for="(item,index) in l_list[num].children" :key="item.id" @click="tit_btn(item.id,item.parent_id,index+1)" :class="{actions:index+1===nums}">{{item.name}}</li>
          </ul>
          <span class="iconfont icon-fenlei"></span>
        </p>
        <one-scroll>
        <div class="ctt_cont_it">
          <one-rightList :lists="r_list" :options="option"></one-rightList>
        </div>
        </one-scroll>
      </div>
    </div>
    <transition name="fade" v-else>
      <one-loading></one-loading>
    </transition>
  </div>
</template>
<script>

import {mapState, mapActions} from 'vuex'
export default {
  data() {
    return {
      num: 0, //右侧初始下标
      nums:0,
      indexs:0,
      lid: 0, //左侧id
      option: {
        dl: "ctt_dl",
        dt: "ctt_dl_dt",
        dd: "ctt_dl_dd"
      }
    };
  },
  async created(){
   await this.type({num:this.num});
   await this.select({type_id: this.l_list[this.num].id})
  },
  computed: {
     ...mapState({
      l_list:state=>state.shopClass.l_list,
      children:state=>state.shopClass.children,
      r_list:state=>state.shopClass.r_list
    })
  },
  methods: {
    ...mapActions("shopClass",["type"]),
    ...mapActions("shopClass",["select"]),
    //点击左侧按钮进行高亮以及请求切换数据，获取当前点击的下标请求title数据，商品数据列表
    lbtn(index, id) {
      this.num = index;
      this.lid = id;
      this.nums=0;
      console.log(index,this.lid,this.l_list[this.num].id,'oooooooooooooooooooo')
      this.type({num:this.num})
      this.select({type_id: this.lid})
     },
    searchBtn() {
      //点击跳转商品搜索页面，
      this.$router.push("/search");
    },
    //点击右侧头部进行数据切换
    tit_btn(id, parentId,index) {
       this.nums = index;
       this.index = 0;
       this.lid=parentId
      this.select({ type_id: parentId, category_id: id })
    }
  }
};
</script>
<style lang="scss" scoped>
.classify {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.header {
  width: 100%;
  height: 100px;
  background: #fff;
  .head {
    width: 90%;
    height: 70px;
    margin-left: 5%;
    margin-top: 15px;
    background: #eee;
    border-radius: 35px;
    .icon-fangdajing {
      display: inline-block;
      text-align: center;
      line-height: 70px;
      font-size: 30px;
      padding: 0 20px;
      color: #ccc;
    }
    input {
      display: inline-block;
      border: 0;
      font-size: 30px;
      background: #eee;
    }
  }
}
.content {
  flex: 1;
  overflow: hidden;
  display: flex;
  background: #fff;
  .ctt_uli {
    font-size: 25px;
    width: 170px;
    background: #eee;
    overflow-y: auto;
    li {
      width: 100%;
      height: 120px;
      text-align: center;
      line-height: 120px;
      color: #4a4a4a;
      white-space: nowrap;
      overflow: hidden;
      text-overflow:ellipsis;
    }
  }
}
  .active,.actions {
    font-weight: 600;
    background: #fff;
    }
.ctt_cont {
  flex: 1;
  display: flex;
  flex-flow: column;
}
.ctt_cont_tit {
  width: 100%;
  height: 59px;;
  display: flex;
  .ctt_cont_uls {
    flex: 8;
    height: 59px;;
    overflow: auto;
    margin-left: 20px;
    font-size: 25px;
    color: #4a4a4a;
    li {
      display: inline-block;
      text-align: center;
      line-height: 59px;
      margin-right: 20px;
    }
  }
  .icon-fenlei,.ctt_cont_all {
    flex: 1;
    font-size: 25px;
    text-align: center;
    line-height: 59px;
  }
}
.ctt_cont_it {
  overflow: hidden;
  flex: 1;

}
</style>