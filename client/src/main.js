import Vue from 'vue'
import App from './App.vue'
import axios from '@/api/index.js'
import router from '@/router/index.js';
import store from '@/store/index';
import '@/assets/fonts/iconfont.css'; //引入icon
import "@/assets/fontss/iconfont.css";
import '@/assets/reset.css'
import '@/plugins/rem'; //引入rem计算

import events from '@/mixins/events'
import baseComponent from '@/plugins/baseComponent'; //引入封装好的全局注册组件方法
import VueAwesomeSwiper from "vue-awesome-swiper";

Vue.prototype.$bus=new Vue()
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(axios)
Vue.use(events)
Vue.use(baseComponent)
new Vue({
    render: h => h(App),
    router,
    Bus:new Vue(),
    store
}).$mount('#app')