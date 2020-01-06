<template>
    <transition>
        <div v-if="show" :style="style" class="message">{{title}}</div>
    </transition>
</template>

<script>
    export default {
        name: 'message',
        props:{
            title:{
                type:String,
                default:''
            },
            type:{
                type:String,
                default:'success'
            }
        },
        data() {
            return {
                show:false
            }
        },
        computed: {
            style(){
                let color
                if(this.type=='success'){
                    color='rgb(95, 167, 105)'
                }else{
                    color='rgb(243, 129, 129)'
                }
                return {
                    background:color
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    .message{
        position: fixed;
        top: 150px;
        left: 50%;
        transform: translate(-50%);
        background: rgb(95, 167, 105);
        font-size: 28px;
        padding: 10px 20px;
        border-radius: 10px;
        color: #fff;
    }
</style>