/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
export const debounce = function (func, wait, immediate = true) {
    let timeout;
    //事件处理程序 dom 节点
    return function () {
        let context = this; //dom
        let args = arguments;
        if (timeout) clearTimeout(timeout);
        if (immediate) {
            var callNow = !timeout;//setTimeout 返回值是一个数字
            timeout = setTimeout(() => {
                timeout = null;
            }, wait)
            if (callNow) func.apply(context, args)
        }
        else {
            timeout = setTimeout(function () {
                func.apply(context, args)
            }, wait);
        }
    }
}

export default {
    install(Vue) {
        Vue.prototype.$debounce = debounce
    }
}