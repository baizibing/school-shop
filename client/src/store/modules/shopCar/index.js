import { getCar, addCar, removeCar, removeShop } from '@/api/shopCar.js';
const state = {
    carList: [],
    checkall: false, //全选默认值
    priceAll: 0, //总价钱
    countAll: 0 //总数量
}

const reducePrice = (arr) => {
    let count = 0;
    let price = 0;
    arr.map(item => {
        if (item.checked) {
            count += item.count;
            price += item.count * item.shopdata.price;
        }
    })
    return {
        count,
        price
    }
}

const mutations = {
    setShopCar(state, payload) {
        state.carList = payload;
    },
    // 购物车数量
    addCar(state, payload) {
        let { shop_id, flag, iscount } = payload;
        let { carList } = state;
        let res = carList.find(item => item.shopid === shop_id);
        if (!iscount) {
            res.count = flag ? (res.count - 1) : (res.count + 1);
        }
        state.priceAll = reducePrice(carList).price;
        state.countAll = reducePrice(carList).count;
    },
    // 单选 同步
    oneCheck(state, payload) {
        let { carList } = state;
        let { shop_id } = payload;
     let res = carList.find(item => item.shopid === shop_id);
  res.checked = !res.checked;
  state.checkall = carList.every(item => item.checked);
        state.priceAll = reducePrice(carList).price;
state.countAll = reducePrice(carList).count;
    },
    // 全选 同步
    isCheckAll(state) {
        let { carList } = state;
        state.checkall = !state.checkall;
        carList.map(item => item.checked = state.checkall);
        state.priceAll = reducePrice(carList).price;
        state.countAll = reducePrice(carList).count;
    },
    // 删除商品
    setdelShop(state, id) {
        let { carList } = state;
        carList.filter(item => item.shopid === id);
    }
}

const actions = {
//     // 获取购物车列表
    async getShopCar({ dispatch, commit, rootState }, payload) {
        console.log(user_id)
        let user_id = rootState.user.userInfo.data.uid;
        //     // 获取其他仓库状态 模块
        await dispatch('user/getUserInfo', null, { root: true })
        getCar({ user_id }).then(({ data }) => {
            let res = data.data.map(item => {
                // keep-alive 缓存
                let res = state.carList.find(val => val.shopid === item.shopid);
                let checked = payload === 'created' ? false : (res && res.checked)
                item.checked = checked;
                return item;
            })
            commit('setShopCar', res)
        })
    },
    // rootState 获取所有模块
    // 添加购物车件数
    addShop({ commit, rootState }, payload) {
        let user_id = rootState.user.userInfo.data.uid;
        console.log(user_id)
        addCar({
            user_id,
            shop_id: payload.shop_id
        }).then(res => {
            if (res.status === 200) {
                commit({
                    type: 'addCar',
                    shop_id: payload.shop_id,
                    flag: false,
                    iscount: payload.iscount
                })
            }
        })
    },
    // 删除商品件数
    disShop({ commit, rootState }, payload) {
        let user_id = rootState.user.userInfo.data.uid;
        removeCar({
            user_id,
            shop_id:payload.shop_id
        }).then(res => {
            if (res.status === 200) {
                commit({
                    type: 'addCar',
                    shop_id: payload.shop_id,
                    flag: true
                })
            }
        })
    },
    // 删除商品
    delShop({  rootState }, payload) {
        let user_id = rootState.user.userInfo.data.uid;
        removeShop({ user_id, shop_id: payload }).then(res => {
            console.log(res, 222);
        })
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}