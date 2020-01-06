import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [{
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        component: () =>
            import ('@/views/home/'),
        children: [{
                path: '/index',
                redirect: '/index/home'
            },
            {
                path: 'home',
                component: () =>
                    import ('@/views/home/children/page/'),
                meta: {
                    footerNav: true,
                    tit: '首页'
                },
            }, {
                path: '/index/classify',
                component: () =>
                    import ('@/views/home/children/classify/'),
                meta: {
                    footerNav: true,
                    tit: '分类'
                },
            }, {
                path: '/index/shop',
                // beforeEnter(...arg) {
                //     let next = arg[2];
                //     let token = window.localStorage.getItem('token');
                //     if (token && token.split('.').length === 3) {
                //         next();
                //     } else {
                //         next('/login');
                //     }
                // },
                // meta: {
                //     requires: true,
                //     footerNav: true,
                //     tit: '购物车',
                //     keepalive:true
                // },
                component: () =>
                    import ('@/views/home/children/shop/')
            }, {
                path: '/index/my',
                component: () =>
                    import ('@/views/home/children/my/'),
                meta: {
                    requires: true,
                    footerNav: true,
                    tit: '我的'
                }
            }
        ]
    }, {
        path: '/login',
        component: () =>
            import ('@/views/login/')
    }, {
        path: '/location',
        component: () =>
            import ('@/views/location/'),
        meta: {
            isLocation: true
        }
    }, {
        path: '/search',
        component: () =>
            import ('@/views/search/'),
    }, {
        path: '/address',
        component: () =>
            import ('@/views/address/')
    },
    {
        path: '/addAddress',
        component: () =>
            import ('@/views/addAddress/'),
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/inputAddress/:city?',
        component: () =>
            import ('@/views/inputAddress')
    },
    {
        path: '/order',
        component: () =>
            import ('@/views/order')
    },
    {
        path: '/detail/:id/:uid/:typeId',
        name:'detail',
        component:()=> import('@/views/detail/')
    }
]
const router = new VueRouter({
    mode: 'history',
    routes
})
router.beforeEach((to, from, next) => {
    if (to.path == '/index/home') {
        let flag = localStorage.getItem('location')
        if (flag) {
            next()
        } else {
            next('/location')
        }
    }
    next()
})
export default router

function findallRoute(routes, attr) { //
    let resRoute = [];
    const findRoute = function(routes) {
        routes.forEach(item => {
            if (item.meta && item.meta[attr]) {
                resRoute.push(item);
            }
            if (item.children) {
                findRoute(item.children, attr);
            }
        })
    }
    findRoute(routes);
    return resRoute
}
export const footerNavConfig = function(attr, res) {
    //1.查找所有meta种attr为true
    return findallRoute(routes, attr).map(item => Object.keys(res).reduce((prev, tit) => { //tit=>tit  tit=>path
        prev[tit] = item[tit] ? item[tit] : item.meta[tit]
        return prev;
    }, {}))
};