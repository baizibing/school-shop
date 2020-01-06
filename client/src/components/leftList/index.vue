<template>
    <ul class="ctt_uli" :list="list">
        <li v-for="(item,index) in list" :key="item.id" :class="{active:index===num}" @click="lbtn(index,item.id)">{{item.title}}</li>
      </ul>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>