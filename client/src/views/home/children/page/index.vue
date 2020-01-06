<template>
  <div class="page">
    <one-scroll
      :options="{
          scrollY:true,
          probeType:2,
          pullUpLoad:true
        }"
      @pullUpLoad="pullUpLoad"
      ref="mysroll"
    >
      <div class="ipt">
        <p @click="locationJump">
          <i class="iconfont icon-dingwei"></i>
          <span>{{location}}</span>
          <i class="iconfont icon-angle-right"></i>
        </p>
        <i class="iconfont icon-fangdajing" @click="jump"></i>
      </div>
      <div class="swiper">
        <swiper v-if="swiperList.length>0" :options="swiperOption" >
          <swiper-slide v-for="(item,index) in swiperList" :key="index">
            <img :src="item.image" alt />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <!-- <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in swiperList" :key="index">
            <img :src="item.image" alt />
          </swiper-slide>
        </swiper>-->
      </div>
      <div class="nav">
        <dl v-for="(item,index) in navList" :key="index">
          <dt>
            <img :src="item.img" alt />
          </dt>
          <dd>{{item.tit}}</dd>
        </dl>
      </div>
      <div class="tit">
        <img
          src="https://img.dmallcdn.com/mIndex/201905/f0d9486a-25e8-4699-b66b-f5d7625083af_750H"
          alt
        />
      </div>
      <div class="img">
        <div>
          <img
            src="https://img.dmallcdn.com/mIndex/201905/a298f1a2-64bb-4280-aded-56170ae4d9e5_360x360H"
            alt
          />
        </div>
        <div>
          <img
            src="https://img.dmallcdn.com/mIndex/201905/16026d16-6314-4665-92b4-698726ff9c90_360x360H"
            alt
          />
        </div>

        <div>
          <img
            src="https://img.dmallcdn.com/mIndex/201905/9a135d13-aadf-400b-99d9-bc8be5df5bc7_360x360H"
            alt
          />
        </div>
      </div>
      <div class="list">
        <one-right-list :lists="list" :options="option"></one-right-list>
      </div>
    </one-scroll>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { mapState, mapActions } from "vuex";

import "swiper/css/swiper.css";
export default {
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    ...mapState("homeList", ["list"])
  },
  data() {
    return {
      swiperList: [],
      pageid: 0,
      limit: 3,
      option: {
        dl: "ctt_dl",
        dt: "ctt_dl_dt",
        dd: "ctt_dl_dd"
      },
      swiperOption: {
        autoplay: true,
        loop: true
      },
      homeList: [],
      location: localStorage.getItem("location"),
      navList: [
        {
          tit: "早晚市",
          img:
            "https://img.dmallcdn.com/dshop/201912/4d9ac5f4-1b3f-424e-8a9b-206d2289b2da_240x240H"
        },
        {
          tit: "生鲜特卖",
          img:
            "https://img.dmallcdn.com/dshop/201912/7709c078-1325-4f7a-92ad-23fc5be21411_240x240H"
        },
        {
          tit: "母婴天地",
          img:
            "https://img.dmallcdn.com/dshop/201912/1ff30e7e-05f2-4ea9-94d4-0ba8b6386c46_240x240H"
        },
        {
          tit: "进店必买",
          img:
            "https://img.dmallcdn.com/dshop/201912/e725bfdc-977b-4009-8758-dbeccee94a42_240x240H"
        },
        {
          tit: "直采品牌",
          img:
            "https://img.dmallcdn.com/dshop/201912/60687ce0-3906-45fe-89b2-2242c8fb03bf_240x240H"
        },
        {
          tit: "新人福利",
          img:
            "https://img.dmallcdn.com/dshop/201912/69666b40-6ce4-4f41-95ee-3ec50ef71425_240x240H"
        },
        {
          tit: "枪便宜",
          img:
            "https://img.dmallcdn.com/dshop/201912/add00e0f-f6d1-41e7-b538-13b79711719e_240x240H"
        },
        {
          tit: "尊享会员",
          img:
            "https://img.dmallcdn.com/dshop/201912/cda29102-2428-4971-ad00-a6adac3f2ced_240x240H"
        },
        {
          tit: "美通卡",
          img:
            "https://img.dmallcdn.com/dshop/201912/feef0a6b-2a6c-4b55-b695-29fdae11d11c_240x240H"
        },
        {
          tit: "品牌直发",
          img:
            "https://img.dmallcdn.com/dshop/201912/1c85f341-6df2-46ce-a0cb-463c744bf4be_240x240H"
        }
      ]
    };
  },
  created() {
    this.getList({ pageid: 0, limit: 10 });
  },
  mounted() {
    this.getSwiperList();
  },
  methods: {
    getSwiperList() {
      this.$http.banner().then(res => {
        this.swiperList = res.data.data.filter(
          item => new Date(item.end_time) * 1 > new Date() * 1
        );
      });
    },
    ...mapActions("homeList", ["getList"]),
    jump() {
      this.$router.push("/search");
    },
    locationJump() {
      this.$router.push("/address");
    },
    pullUpLoad(event) {
      event.then(async res => {
        let data = await this.getList({ pageid: res, limit: 10 });
        this.$refs["mysroll"].refresh();
        if (!data.data.length) {
          return;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.page {
  @include wh(100%, 100%);
  background: white;
  .ipt {
    @include wh(100%, 98px);
    @include flex();
    font-size: 24px;
    color: #999999;
    justify-content: space-between;
    align-items: center;
    p {
      flex: 1;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    i {
      display: inline-block;
      @include wh(54px, 54px);
      text-align: center;
      line-height: 54px;
      font-size: 30px
    }
  }
  .swiper {
    @include wh(100%, 308px);
    .swiper-container {
      @include wh(100%, 308px);
      img {
        @include wh(100%, 100%);
      }
    }
  }
  .nav {
    @include wh(100%);
    display: flex;
    flex-wrap: wrap;
    dl {
      @include wh(140px, 156px);
      margin-top: 10px;
      dt {
        margin: 0 auto;
        img {
          @include wh(100%);
        }
      }
      dd {
        text-align: center;
        font-size: 24px;
        color: #999999;
      }
    }
  }
  .tit {
    @include wh(100%, 88px);
    img {
      @include wh(100%);
    }
  }
  .img {
    @include wh(100%, 300px);
    @include flex();
    div {
      flex: 1;
      img {
        @include wh(100%);
      }
    }
  }
}
</style>