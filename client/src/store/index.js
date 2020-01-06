import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user/index'
import shopCar from './modules/shopCar/index'
import shopClass from './modules/shopClass'
import homeList from './modules/homeList'
Vue.use(Vuex)
let text = require.context('./modules', true, /index\.js/)
let modules = text.keys().reduce((prev, next) => {
    let arr = next.match(/\.\/(\w+)\/index\.js/)
    prev[arr[1]] = text(next).default;
    return prev
}, {})
const $store = new Vuex.Store({
    state: {},
    mutations: {

    },
    actions: {

    },
    modules: {
        user,
        shopCar,
        shopClass,
        homeList,
        modules
    }
})
window.store = $store;
export default $store;