<template>
  <div class="My">
    <div class="header">
      <h3>Hello,你好</h3>
      <button @click="login" v-if="!user">去登陆</button>
      <button @click="userLogin" v-else if="user">{{user.nickname}}</button>
    </div>
    <transition name="slide-fade">
      <one-dialog :alert="alert" v-show="alert" :option="option">
        <p class="dingwei">
          <span @click="markNone">
            <i class="icon iconfont icon-xiangzuo"></i>
          </span> 账号信息
        </p>
        <div class="phones">
          <span>手机号</span>
          <span>134****1234</span>
        </div>
        <div class="weixin">
          <span>微信</span>
          <span>已绑定</span>
        </div>
        <button class="btn" @click="outLogin">退出登录</button>
      </one-dialog>
    </transition>
    <div class="main">
      <div class="nav">
        <span>我的订单</span>
        <span>
          全部订单&nbsp;&nbsp;&nbsp;&nbsp;
          <i class="icon iconfont icon-xiangxia"></i>
        </span>
      </div>
      <div class="navIndent">
        <a href="#">
          <i class="icon iconfont">&#xe61b;</i>
          <p>待支付</p>
        </a>
        <a href="#">
          <i class="icon iconfont">&#xe6f5;</i>
          <p>已发货</p>
        </a>
        <a href="#">
          <i class="icon iconfont">&#xe609;</i>
          <p>待发货</p>
        </a>
      </div>
      <div class="property">我的资产</div>
      <div class="navProperty">
        <a href="#">
          <b>0.00</b>
          <p>余额</p>
        </a>
        <a href="#">
          <b>0</b>
          <p>积分</p>
        </a>
        <a href="#">
          <b>0</b>
          <p>优惠券</p>
        </a>
      </div>
      <div class="server">美丽城市</div>
      <div class="ServerDiv">
        <a href="#">
          <i class="icon iconfont icon-21"></i>
          <p>巴西</p>
        </a>
        <a href="#">
          <i class="icon iconfont icon-14"></i>
          <p>东京塔-日</p>
        </a>
        <a href="#">
          <i class="icon iconfont icon-20"></i>
          <p>复活节岛石像</p>
        </a>
        <a href="#">
          <i class="icon iconfont icon-18"></i>
          <p>罗马斗兽场</p>
        </a>
        <a href="#">
          <i class="icon iconfont icon-02"></i>
          <p>长城</p>
        </a>
   
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      flag: true,
      alert: false,
      option: {
        width: 100 + "%",
        height: 100 + "%",
        top: 0,
        right: 0,
        bottom: -100 + "%",
        left: 100 + "px"
      }
    };
  },
  mounted(){
    this.user=JSON.parse(localStorage.getItem("userss"));
    console.log(this.user)
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    userLogin() {
      this.alert = true;
    },
    markNone() {
      this.alert = false;
    },
    outLogin() {
      window.localStorage.removeItem("userss");
      this.alert = false;
      location.reload(true);
    }
  }
};
</script>
<style lang="scss" scoped>
.My {
  @include wh(100%, 100%);
  display: flex;
  flex-direction: column;
  .dialog {
    @include wh(100%, 100%);
    .dingwei {
      @include wh(100%, 100px);
      text-align: center;
      font-size: 36px;
      font-weight: bolder;
      line-height: 100px;
      border-bottom: 2px solid #ccc;
      position: relative;
      span {
        display: block;
        @include wh(64px, 64px);
        position: absolute;
        border-radius: 50%;
        background: #333333;
        top: 18px;
        left: 20px;
        text-align: center;
        line-height: 64px;
        i {
          font-size: 36px;
          color: #fff;
        }
      }
    }
    .phones {
      @include wh(84%, 60px);
      display: flex;
      font-size: 32px;
      justify-content: space-between;
      line-height: 60px;
      margin: 0 auto;
      margin-top: 20px;
    }
    .weixin {
      @include wh(84%, 60px);
      display: flex;
      font-size: 30px;
      justify-content: space-between;
      line-height: 60px;
      margin: 0 auto;
      margin-top: 20px;
      color: #c8c8c8;
      margin-top: 10px;
    }
    .btn {
      @include wh(660px, 88px);
      display: block;
      margin: 0 auto;
      margin-top: 40px;
      text-align: center;
      line-height: 88px;
      color: #fff;
      font-size: 36px;
      background: red;
      border-radius: 10px;
    }
  }
  .header {
    @include wh(100%, 320px);
    background: url("//img.dmallcdn.com//dshop/201912/13b7b397-1d7b-4fda-80df-1c4030410765");
    background-repeat:no-repeat;
    background-attachment: fixed;
    h3 {
      font-size: 36px;
      color: #fff;
      margin-left: 20px;
      margin-top: 24px;
    }
    button {
      @include wh(200px, 50px);
      border-radius: 50px;
      margin-left: 20px;
      background: #fff;
      color: red;
      line-height: 50px;
      margin-top: 20px;
    }
  }
  .main {
    flex: 1;
      overflow: hidden;
      overflow-y: auto;
      margin-top:60px;
    .nav {
      @include wh(100%, 100px);
      display: flex;
      justify-content: space-around;
      font-size: 32px;
      line-height: 100px;
    }
    .navIndent {
      @include wh(100%, 174px);
      margin-top: 20px;
      display: flex;
      justify-content: space-around;
      line-height: 74px;
      text-align: center;
      i {
        font-size: 70px;
        color: green;
      }
      p {
        font-size: 32px;
        color: #000;
      }
    }
    .property {
      @include wh(100%, 100px);
      font-size: 32px;
      padding-left: 48px;
      line-height: 100px;
    }
    .navProperty {
      @include wh(100%, 236px);
      margin-top: 20px;
      display: flex;
      justify-content: space-around;
      text-align: center;
      line-height: 90px;
      b {
        font-size: 40px;
        color: #000;
      }
      p {
        font-size: 32px;
        color: #000;
      }
    }
    .server {
      @include wh(100%, 80px);
      font-size: 32px;
      padding-left: 48px;
    }
    .ServerDiv {
      width: 100%;
      height: 300px;
      margin-top: 20px;
      // display:flex;
      // justify-content: space-around;
      flex-wrap: wrap;
      display: flex;
      align-items: center;
      a {
        width: 25%;
        height: 150px;
        text-align: center;
        font-size: 28px;
        line-height: 80px;
        text-decoration: none;
        i {
          font-size: 48px;
          color: green;
        }
        p {
          font-size: 28px;
          color: #000;
        }
      }
    }
  }
  .slide-fade-enter-active {
    transition: all 0.3s;
  }
  .slide-fade-leave-active {
    transition: all 0.3s;
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateY(100%);
  }
}
</style>