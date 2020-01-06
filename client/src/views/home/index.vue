<template>
    <div class="box">
        <div class="main">
            <keep-alive include="ShopCars">
                 <router-view></router-view>
            </keep-alive>
        </div>
        <div class="foot">
            <one-foot :list.sync=footList></one-foot>
        </div>
    </div>
</template>

<script>
    export default {
         data() {
        return {
            footList:[
                {
                    img:'/home.png',
                    imging:'/homing.png',
                    cont:'首页',
                    path:'/index/home',
                    flag:true
                },
                {
                   img:'/classify.png',
                   imging:'/classing.png',
                    cont:'分类',
                    path:'/index/classify',
                    flag:false
                },
                {
                    img:'/shop.png',
                    imging:'/shoping.png',
                     cont:'购物车',
                     path:'/index/shop',
                     flag:false
                },
                {
                    img:'/my.png',
                    imging:'/mying.png',
                     cont:'我的',
                     path:'/index/my',
                     flag:false
                }
            ]
        }
    },
    }
</script>

<style lang="scss" scoped>
.box{
    @include wh(100%,100%);
    @include flex();
    flex-direction: column;
    overflow: hidden;
}
.main{
    @include wh(100%);
    flex: 1;
    overflow: auto;
}
.foot{
     @include wh(100%,98px);
}
</style>