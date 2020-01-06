import {
    shopType,
    selectType
} from '@/api/classify.js';
const state = {
    l_list: [],
    children: [],
    r_list: []
}
const mutations = {
    leftList(state, lay) {
        state.l_list = lay
    },
    rightList(state, lay) {
        state.r_list = lay
    },
}
const actions = {
    async type({ commit }, lay) {
        let { num } = lay
        let res = await shopType()
        commit('leftList', res.data.data, num);
    },
    async select({ commit }, lay) {
        let res = await selectType(lay)
        commit('rightList', res.data.data)
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}