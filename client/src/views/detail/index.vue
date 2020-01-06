
      <template>
  <div class="detailImg">
    <div class="header">
      <b>商品详情</b>
    </div>
    <div class="main">
      <div class="mainDiv"  v-for="(item,index) in newdata" :key="index">
      <div class="headImg">
         <swiper >
         <swiper-slide v-for="(ImgUrl,index) in JSON.parse(item.pictures)" :key="index">
         <img :src="ImgUrl" alt />
        </swiper-slide>
          </swiper>
      </div>
      <div class="nav">
        <h1>¥&nbsp;&nbsp;{{item.price}}</h1>
        <span>累计销售<i>{{item.volume}}</i>份</span>
      </div>
      <div class="titleNav">
        <div class="title">四川凯塔海南空运{{item.name}}</div>
        <div class="share">
          <i class="icon iconfont icon-share6"></i>
          <p>分享</p>
        </div>
      </div>
      <div class="recommend">
        <b>小编推荐</b>
        <p>
          源自海南自建果园,源头空运直供,实现从裁刀您把开果园,
          是个12小时,真正让您在遥远的北方依
        </p>
      </div>
      <div class="strip"></div>
      <div class="user">
        <div class="head">
          <p>购买记录</p>
          <p>共2233人购买</p>
        </div>
        <ul>
          <li>
            <div>
              <div class="dataLeft">
                <div class="divLeft"></div>
                <div class="divRight">
                  <h4>小妮***子</h4>
                  <p>2018.11.11</p>
                </div>
              </div>
            </div>
            <div class="shopCount">购物 1 件</div>
          </li>
          <li>
            <div>
              <div class="dataLeft">
                <div class="divLeft"></div>
                <div class="divRight">
                  <h4>小妮***子</h4>
                  <p>2018.11.11</p>
                </div>
              </div>
            </div>
            <div class="shopCount">购物 2 件</div>
          </li>
        </ul>
        <p class="more">查看更多</p>
      </div>
      <div class="strips"></div>
      <div class="evaluate">
        <div class="heade1">
          <b>商品评价</b>
          <p>好评论(100%)</p>
        </div>
        <div class="content">
          <div class="conUser">
            <div class="con">
              <img src="../../../public/images/biao_08.jpg" alt />
              <div class="user">
                <P class="UserName">小***圆圆</P>
                <p class="time">2019-6-08</p>
                <p class="goodShop">商品完好</p>
              </div>
              <div class="con1">
                <p>★★★★★</p>
                <div>满心好评</div>
              </div>
            </div>
          </div>
          <div class="conUwer1">
            <img src="../../../public/images/biao_08.jpg" alt />
            <p>没有评论</p>
          </div>
        </div>
      </div>
      <div class="strips2"></div>
      <div class="shopContent">
        <p>猜你喜欢</p>
        <ul class="shopContent1">
          <li>
            <img src="../../../public/shop.png" alt />
            <div class="shopImg">
              <p class="eatFood">好吃看的开得快</p>
              <div class="price">
                <div class="prices">
                  <p>￥ 15.9</p>
                  <p>22.99</p>
                </div>
                <div class="icon">
                  <i class="icon iconfont icon-gouwuche-xuanzhong"></i>
                </div>
              </div>
            </div>
          </li>
          <li>
            <img src="../../../public/shop.png" alt />
            <div class="shopImg">
              <p class="eatFood">真的很好吃</p>
              <div class="price">
                <div class="prices">
                  <p>￥ 15.9</p>
                  <p>22.99</p>
                </div>
                <div class="icon">
                  <i class="icon iconfont icon-gouwuche-xuanzhong"></i>
                </div>
              </div>
            </div>
          </li>
          <li>
            <img src="../../../public/shop.png" alt />
            <div class="shopImg">
              <p class="eatFood">面真的很好吃</p>
              <div class="price">
                <div class="prices">
                  <p>￥ 15.9</p>
                  <p>22.99</p>
                </div>
                <div class="icon">
                  <i class="icon iconfont icon-gouwuche-xuanzhong"></i>
                </div>
              </div>
            </div>
          </li>
          <li>
            <img src="../../../public/shop.png" alt />
            <div class="shopImg">
              <p class="eatFood">面真的很好吃</p>
              <div class="price">
                <div class="prices">
                  <p>￥ 15.9</p>
                  <p>22.99</p>
                </div>
                <div class="icon">
                  <i class="icon iconfont icon-gouwuche-xuanzhong"></i>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      </div>
    </div>
    <div class="footer">
      <div class="foot" @click="jumpHome">
        <i class="icon iconfont icon-shouye"></i>
        <div class="name">首页</div>
      </div>
      <div class="foot">
        <i class="icon iconfont icon-gouwuche-xuanzhong"></i>
        <div class="name" @click="jumpShop">购物车</div>
      </div>
      <div class="foot">加入购物车</div>
      <div class="foot">直接购买</div>
    </div>
  </div>
</template>
<script>
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  import "swiper/css/swiper.css";
export default {
  props: {},
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
       data:[],
       newdata:[]
      //  ,
      //  olddata:[]
    }
  },

  methods: {
     jumpHome(){
         this.$router.push('/index/home')
     },
     jumpShop(){
         this.$router.push('/index/shop')
     }
  },
  async created() {
     let res = await this.$http.selectType({type_id:this.$route.params.typeId,category_id:this.$route.params.category_id});
        this.data=res.data.data.filter(item=>item.id==this.$route.params.id);
        this.newdata=JSON.parse(JSON.stringify(this.data))
    //     // localStorage.setItem('newdata',JSON.stringify(this.newdata))
    //     // this.olddata=JSON.parse(localStorage.getItem('newdata'));
    // })

  }
};
</script>
<style scoped lang="scss">
.detailImg {
  @include wh(100%, 100%);
  font-size: 36px;
  display: flex;
  flex-direction: column;
  background: #f8f8f8;
  overflow: hidden;
  .header {
    @include wh(100%, 88px);
    text-align: center;
    line-height: 88px;
    font-size: 44px;
  }
  .headImg {
    @include wh(100%, 600px);
    img {
      @include wh(100%, 600px);
    }
  }
  .main {
     flex: 1;
     overflow-y: auto;
     .mainDiv{
      @include wh(100%,100%);
    .nav {
      @include wh(100%, 120px);
      background: red;
      padding-left: 30px;
      padding-right: 30px;
      border-radius: 15px;
      h1 {
        font-size: 46px;
        color: #fff;
      }
      span {
        font-size: 28px;
        color: #fff;
      }
    }
    .titleNav {
      @include wh(100%, 110px);
      margin-top: 44px;
      display: flex;
      .share {
        @include wh(160px, 110px);
        text-align: center;
        line-height: 55px;
        i {
          font-size: 56px;
        }
        p {
          font-size: 28px;
        }
      }
      .title {
        flex: 1;
        padding-left: 28px;
        line-height: 60px;
        font-size: 36px;
        font-weight: bolder;
      }
    }
    .recommend {
      @include wh(100%, 152px);
      margin-top: 40px;
      b {
        @include wh(100%, 72px);
        font-size: 46px;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        padding-left: 30px;
      }
      p {
        margin: 0 auto;
        @include wh(96%, 80px);
        font-size: 30px;
        margin-top: 20px;
        line-height: 45px;
      }
    }
    .strip {
      width: 100%;
      height: 30px;
      background: #e0e0e0;
      margin-top: 60px;
    }
    .user {
      @include wh(96%, auto);
      margin: 0 auto;
      margin-top: 25px;
      .head {
        margin: 0 auto;
        @include wh(96%, 50px);
        font-size: 28px;
        display: flex;
        justify-content: space-between;
        p:nth-child(1) {
          font-size: 28px;
          font-weight: 900;
        }
      }
      ul {
        @include wh(96%, auto);
        margin: 0 auto;
        margin-top: 50px;
        li {
          margin: 0 auto;
          @include wh(96%, 100px);
          list-style: none;
          display: flex;
          margin-top: 40px;
          justify-content: space-between;
          .dataLeft {
            display: flex;
            @include wh(300px, 100px);
            justify-content: space-between;
            .divLeft {
              @include wh(80px, 80px);
              border-radius: 50%;
              background: #ccc;
              margin-top: 12px;
            }
            .divRight {
              flex: 1;
              text-align: center;
              line-height: 60px;
              h4 {
                font-size: 32px;
                font-weight: 900;
              }
              p {
                font-size: 28px;
              }
            }
          }
          .shopCount {
            line-height: 100px;
            margin-left: 20px;
            font-size: 32px;
            font-weight: 900;
          }
        }
      }
      .more {
        @include wh(100%, 100px);
        text-align: center;
        line-height: 100px;
        margin: 0 auto;
        margin-top: 40px;
        font-size: 34px;
        line-height: 100px;
        color: #a7a7a7;
      }
    }
    .strips {
      @include wh(100%, 30px);
      background: #e0e0e0;
      margin-top: 30px;
    }
    .evaluate {
      @include wh(96%, auto);
      margin: 0 auto;
      .heade1 {
        @include wh(100%, 100px);
        margin: 0 auto;
        display: flex;
        line-height: 100px;
        justify-content: space-between;
        b {
          font-size: 32px;
        }
        p {
          font-size: 28px;
          color: #999999;
        }
      }
      .content {
        @include wh(96%, auto);
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        .conUser {
          @include wh(45%, 250px);
          flex: 1;
          display: flex;
          justify-content: space-between;
          .con {
            display: flex;
            img {
              @include wh(100px, 100px);
              margin-top: 40px;
            }
            .user {
              @include wh(200px, 150px);
              margin-left: 10px;
              line-height: 70px;
              .UserName {
                font-size: 34px;
                font-weight: 900;
              }
              .time {
                font-size: 30px;
                color: #aaaaaa;
              }
              .goodShop {
                color: #727272;
              }
            }
            .con1 {
              @include wh(200px, 150px);
              text-align: center;
              line-height: 70px;
              margin-top: 20px;
              margin-left: 20px;
              p {
                font-size: 48px;
                color: #febb2f;
              }
              div {
                color: #a6a6a6;
              }
            }
          }
        }
        .conUwer1 {
          @include wh(150px, 250px);
          img {
            @include wh(100px, 100px);
            margin-left: 40px;
            margin-top: 34px;
          }
          p {
            line-height: 96px;
            color: #727272;
          }
        }
      }
    }
    .strips2 {
      @include wh(100%, 30px);
      background: #e0e0e0;
      margin-top: 30px;
    }
    .shopContent {
      @include wh(100%, auto);
      margin-top: 40px;
      p {
        @include wh(96%, 60px);
        font-size: 32px;
        font-weight: 900;
        margin: 0 auto;
      }
      .shopContent1 {
        @include wh(100%, auto);
        display: flex;
        overflow: hidden;
        overflow-x: scroll;
        justify-content: space-around;
        display: -webkit-box;
        -webkit-overflow-scrolling: touch;
        li {
          @include wh(300px, 550px);
          margin-left: 40px;
          .shopImg {
            margin-top: 20px;
            .eatFood {
              margin-top: 20px;
              padding-left: 12px;
            }
            .price {
              display: flex;
              justify-content: space-around;
              .prices {
                @include wh(60%, auto);
                p:nth-child(1) {
                  font-size: 36px;
                  color: red;
                  font-weight: bolder;
                }
                p:nth-child(2) {
                  padding-left: 12px;
                }
              }
              .icon {
                @include wh(80px, 80px);
                background: red;
                border-radius: 50%;
                text-align: center;
                margin-top: 10px;
                i {
                  font-size: 46px;
                  line-height: 80px;
                  color: #fff;
                }
              }
            }
          }
        }
      }
    }
  }
  }
  .footer {
    @include wh(100%, 100px);
    display: flex;
    justify-content: space-between;
    .foot:nth-child(1),
    .foot:nth-child(2) {
      flex: 2;
      text-align: center;
      line-height: 50px;
      i {
        font-size: 50px;
      }
      div {
        font-size: 20px;
      }
    }
    .foot:nth-child(3) {
      flex: 3;
      background: #ffba2f;
      text-align: center;
      line-height: 100px;
      color: #fff;
      font-size: 30px;
    }
    .foot:nth-child(4) {
      flex: 4;
      background: red;
      text-align: center;
      line-height: 100px;
      font-size: 30px;
      color: #fff;
    }
  }
}
</style>