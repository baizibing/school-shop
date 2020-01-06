const filename = require.context('./', false, /[^index]\.js$/);
export default {
    install(Vue) {
        Vue.prototype.$http = filename.keys().reduce((prev, cur) => {
            return Object.assign({}, prev, filename(cur))
        }, {})
    }
}