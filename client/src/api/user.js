import request from '../utils/request';
//用户注册接口
export const registry = (data)=>request.post('/user/registry',data)
 //用户登陆接口
export const login = (data)=>request.post('/user/login',data)
//获取验证码
export const checkCode = (data)=>request.post('/user/checkCode',data)
// 获取用户信息
export const getUserInfo = () => request.get('/user/getUserInfo')