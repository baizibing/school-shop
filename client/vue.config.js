module.exports = {
    devServer: {
        proxy:{
            '/api':{
                // target:'http://118.89.234.135:7001',//baseurl
                target:' http://127.0.0.1:7002',//baseurl
                changeOrigin:true, //是否跨域
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    },
    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        remUnit: 50
                    })
                ]
            },
            scss: {
                prependData: `@import "~@/assets/index.scss";`
            }
        }
    },
    configureWebpack: {
        externals: {
            'AMap': 'AMap'
        }
    }
}