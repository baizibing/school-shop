
<template>
  <div class="login">
    <div class="tag" v-show="shows" @click="show">
      <div class="wrap">
        <div class="plac">请输入验证码</div>
        <div class="news">
          6位短信验证码已发送至
          <span>{{val}}</span>
        </div>
        <div class="inp">
          <div class="code-wrapper">
            <div :class="code[item]?'code-one':'code-two'"
              v-for="(index, item) in number"
              :key="index"
            >{{ code[item] }}</div>
            <input
              class="code-input"
              v-model="code"
              :maxlength="number"
              type="number"
              @input="iptChange"
              pattern="[0-9]*"
            />
          </div>
        </div>
        <div class="times">{{texts}}</div>
        <button class="log" @click="log">登录</button>
      </div>
    </div>
    <div class="login">
      <div class="header">校园超市</div>
      <h1>手机号登录</h1>
    </div>
    <div class="ipt">
      <input type="text" @input="ipts" v-model="val" placeholder="请输入您的手机号" />
    </div>
    <button :class="{'btn':disabled,'btn1':!disabled}" @click="btn">获取验证码</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      texts: "",
      val: "",
      code: "",
      disabled: true,
      time: 0,
      second: 60,
      number: 6,
      shows: false,
      active: true
    };
  },
  methods: {
    handShows() {
      this.shows = true;
    },
    iptChange() {
      if (this.code.length > 6) {
        this.code = this.code.slice(0, 6);
        if(this.code.length===5){
            this.$http
          .login({ phone: this.val, checkcode: this.code })
          .then(res => {
            if (res.data.code === 1) {
              window.localStorage.setItem("token", res.data.data.token);
              this.$http.getUserInfo().then(res => {
                window.localStorage.setItem(
                  "userss",
                  JSON.stringify(res.data.data)
                );
              });
         this.$router.push("/index/home");
           
            } else {
              alert("验证码有误");
            }
          });
        }
      }
    },
    btn() {
      this.shows = true
      if (!this.disabled) {
        this.$http.checkCode({ phone: this.val }).then(res => {
          if (res.data.code === 1) {
            this.time = this.second;
            this.shows = true;
            this.timer();
          }
        });
      }
    },
    show(e) {
      if (e.target.className === "tag") {
        this.shows = false;
        this.val = "";
        this.disabled = true;
      }
    },

    timer() {
      if (this.time > 0) {
        this.time--;
        setTimeout(this.timer, 1000);
        this.texts = this.time + "s 后重新获取";
      } else {
        this.texts = "验证码已过期请重新获取";
      }
    },
    log() {
      try {
        this.$http
          .login({ phone: this.val, checkcode: this.code })
          .then(res => {
            if (res.data.code === 1) {
              window.localStorage.setItem("token", res.data.data.token);
              this.$http.getUserInfo().then(res => {
                window.localStorage.setItem(
                  "userss",
                  JSON.stringify(res.data.data)
                );
              });
            this.$router.push("/index/home");
        
            } else {
              alert("验证码有误");
            }
          });
      } catch (error) {
        console.log(error.response);
      }
    },
    ipts() {
      if (this.val.length == 11) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    }
  }
};
</script>
<style scoped  lang="scss">
.login {
  position: relative;
  width: 100%;
  height: 100%;
  .tag {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    .wrap {
      @include wh(80%, 500px);
      border-radius: 20px;
      background: #fff;
      margin: 170px auto;
      .plac {
        font-size: 36px;
        font-weight: bold;
        padding-left: 40px;
        padding-top: 20px;
      }
      .news {
        margin-top: 20px;
        font-size: 28px;
        padding-left: 40px;
      }
      .times {
        font-size: 28px;
        padding-left: 40px;
      }
      .inp {
        display: flex;
        @include wh(80%, 100px);
        margin: 0 auto;
        margin-top: 40px;

        .code-wrapper {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: space-between;
          font-size: calc(0.28rem * 2);
          .code-one {
            @include wh(16%, 90px);
            line-height: 90px;
            border:2px solid green;
            text-align: center;
          }
          .code-two{
            @include wh(16%, 90px);
            line-height: 90px;
            border:2px solid #ccc;
            text-align: center;
          }
          .code-input {
            height: calc(1rem * 2);
            position: absolute;
            outline: none;
            color: transparent;
            text-shadow: 0 0 0 transparent;
            width: 200%;
            margin-left: -100%;
            border: none;
            background: none;
            -webkit-appearance: none;
          }
        }
      }
      .times{
         margin-top:20px;
      }
      .log {
        @include wh(80%, 80px);
        margin: 0 auto;
        display: block;
        margin-top: 30px;
        border: 0;
        color: #fff;
        font-size: calc(0.15rem * 2);
        border-radius: 20px;
        background: rgb(246, 76, 14);
        margin-top:50px;
      }
    }
  }
  .login {
    margin: 0 auto;
    display: block;
    @include wh(100%, 300px);
    overflow: hidden;
    .header {
      @include wh(100%, 100px);
      text-align: center;
      font-size: 38px;
      line-height: 100px;
      font-weight: 900;
    }
    h1 {
      width: 80%;
      display: block;
      margin: 0 auto;
      font-size: 60px;
    }
  }
  .ipt {
    @include wh(80%, 60px);
    margin: 0 auto;
    background: #fff;
    margin-bottom: 80px;
    border-bottom: 1px solid #999;
    padding-left: 30px;
    input {
      width: 100%;
      height: 100%;
      font-size: 32px;
      border: 0;
    }
  }
  .btn {
    @include wh(80%, 90px);
    margin: 0 auto;
    color: #999;
    background: rgb(231, 226, 226);
    border: 0;
    border-radius: 20px;
    display: block;
    margin-top:100px;
    font-size:36px;
  }
  .btn1 {
    @include wh(80%, 90px);
    margin: 0 auto;
    color: #fff;
    background: rgb(246, 76, 14);
    border: 0;
    border-radius: 20px;
    display: block;
    font-size:36px;
    margin-top:100px;
  }
}
</style>