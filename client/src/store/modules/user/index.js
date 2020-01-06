import { getUserInfo } from '@/api/user.js'
const state = {
    userInfo: {}
}

const mutations = {
    setUserInfo(state, payload) {
        state.userInfo = payload;
    }
}

const actions = {
    async getUserInfo({ commit }) {
        let data = await getUserInfo();
        commit({
            type: 'setUserInfo',
            data: data.data
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}