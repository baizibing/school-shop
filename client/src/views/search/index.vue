<template>
  <div>
    <div class="tit">
      <Input @getSearch="getList" />
    </div>
    <div class="history">
      <p class="lishi">
        <span class="lishilaji">
          <i>历史记录:</i>
          <i></i>
          <i class="iconfont icon-lajitong" @click="del"></i>
        </span>
        <span v-for="(item,index) in his" :key="index" @click="search(item)">{{item}}</span>
      </p>
    </div>
    <one-rightList :options="option" :lists="list"></one-rightList>
  </div>
</template>
<script>
import Input from "../../components/input";
import { mapState } from "vuex";
export default {
  props: {},
  components: {
    Input
  },
  data() {
    return {
      option: {
        width: 50 + "%",
        height: 50 + "%",
        dl: "searchDl",
        dt: "searchDt",
        dd: "searchDd"
      },
      list: [],
      his: [],
      arr: []
    };
  },
  created() {
    this.his = JSON.parse(window.localStorage.getItem("history"));
  },
  computed: {
    ...mapState({
      history: state => state.shopClass.history
    })
  },
  methods: {
    getList(data, item) {
      if (data.length !== 0) {
        this.list = data;
        this.his.push(item);
        window.localStorage.setItem("history", JSON.stringify(this.his));
      }
    },
    search(item) {
      this.$http
        .search({
          search_key: item
        })
        .then(res => {
          this.list = res.data.data;
        });
    },
    del() {
      this.his = [];
      window.localStorage.removeItem("history");
    }
  }
};
</script>
<style scoped lang="scss">
.history {
  width: 100%;
  margin-bottom: 30px;
  span {
    display: inline-block;
    height: 60px;
    font-size: 30px;
    text-align: left;
    line-height: 30px;
    padding: 20px 20px;
    margin-left: 30px;
    margin-top: 30px;
    border: 1px solid pink;
    border-radius: 25px;
  }
  .lishi {
    font-size: 30px;
    margin-left: 20px;
  }
  .lishilaji {
    display: block;
    width: 100%;
    height: 30px;
    padding: 0 20px;
    font-size: 30px;

    border: 0;
    display: flex;
    i:nth-child(1) {
      flex: 2;
      font-style: normal;
    }
    i:nth-child(2) {
      flex: 7;
    }
    i:nth-child(3) {
      flex: 1;
    }
  }
}
</style>