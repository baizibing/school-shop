import {
    shop
} from '@/api/shopCar.js';
const state = {
    list:[]
}
const mutations = {
    initList(state,payload){
        state.list=payload
    },
    setList(state,payload){
        console.log(payload)
        state.list=state.list.concat(payload)
    }
}
const actions = {
   async getList({commit},payload){
         let res = await shop({...payload})
        if(payload.pageid==0){
            commit('initList',res.data.data)
        }
        else{
            commit('setList',res.data.data)
        }
        return res
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}