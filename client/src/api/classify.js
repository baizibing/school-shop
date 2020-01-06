import request from '../utils/request';
//筛选分类页面商品
export const selectType = (data) => request.get('/shop/selectType', data)
    //获取分类页面分类
export const shopType = (data) => request.get('/shop/shopType', data)