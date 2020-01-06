<template>
  <div class="addressList">
    <dl>
      <dt>
        <input type="radio" name="a" v-show="!show" />
      </dt>
      <dd>
        <li>{{list.user}}</li>
        <li>{{list.tel}}</li>
        <li>{{list.address}}</li>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: "Addresslist",
  props: {
    list: {
      type: Object,
      default() {
        return {};
      }
    },
    show: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.addressList {
  @include wh(100%, 175px);
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  background: white;
  input{
    display: inline-block;
    margin-top: 80px;
    margin-left:20px;
  }

}
dl {
  display: flex;
  li {
    font-size: 28px;
    padding: 10px 15px;
  }
}
</style>    