import request from '../utils/request';
//添加购物车或者增加件数
export const addCar = (data) => request.post('/car/addCar', data)
    //获取购物车列表
export const getCar = (data) => request.get('/car/getCar', data)
    //删除购物车商品
export const removeShop = (data) => request.post('/car/removeShop', data)
    //删除购物车商品件数
export const removeCar = (data) => request.post('/car/removeCar', data)
    //获取首页轮播图片
export const banner = (data) => request.get('/home/banner', data)
    //获取首页商品
export const shop = (data) => request.get('/home/shop', data)
    //搜索
export const search = (data) => request.get('/search', data)