import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入页面进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('./views/Home/index.vue'),
    children: [
      {
        path: 'about',
        component: () => import('./views/Home/about.vue'),
        meta: {
          title: '关于页'
        }
      },
      {
        path: 'list',
        component: () => import('./views/Home/list.vue'),
        meta: {
          title: '列表页'
        }
      }
    ]
  },
  {
    path: '/detail/:id',
    name: 'abc',
    component: () => import('./views/Detail/index.vue'),
    beforeEnter: (to, from, next) => {
      console.log('将要进入到 详情页')
      next() // 放行
    },
    meta: {
      title: '详情页'
    }
  },
  {
    path: '/money',
    component: () => import('./views/Money/index.vue'),
    meta: {
      title: '钱包页面',
      needLogin: true //需要登录之后才能进入
    }
  },
  {
    path: '/card',
    component: () => import('./views/Card/index.vue'),
    meta: {
      title: '卖座卡页面',
      needLogin: true
    }
  },
  {
    path: '/login',
    component: () => import('./views/Login/index.vue'),
    meta: {
      title: '登录页面'
    }
  }
  // {
  //   path: '/hello',
  //   alias: '/world',
  //   // 不是使用 component  而是 components
  //   components: {
  //     // 坑的名字: 路由页面组件
  //     top: () => import('./views/Home/about.vue'),
  //     bottom: () => import('./views/Home/list.vue')
  //   }
  // }
  // {
  //   path: '*',
  //   redirect: {
  //     path: '/hello'
  //   }
  // }
]

const router = new VueRouter({
  routes,
  mode: 'hash'
})

// 全局前置路由 *****
router.beforeEach((to, from, next) => {
  NProgress.start()

  if (to.meta.needLogin) {
    // 存在，还需判断登录状态
    if (window.isLogin) {
      // 真，有登录状态，也是直接放行
      next()
    } else {
      // 假 没有登录状态，给我去登录页面
      // // 1. 将将要去的页面地址给存起来
      // window.localStorage.setItem('toPath', to.path)
      // next('/login')
      // 2. 携带在url地址上面
      next(`/login?redirect=${to.path}`)
    }
  } else {
    // 不存在，直接放行
    next()
  }

  // console.log(to)
  // console.log(from)
  // if (to.path === '/about') {
  //   next()
  // } else if (to.path === '/list') {
  //   // next(false)
  //   next('/detail/1')
  // } else {
  //   next()
  // }
})

// 全局后置守卫 , 没有next
router.afterEach((to, from) => {
  // 1. 取出 title
  console.log(to)
  let title = to.meta.title
  // 2. 给 document.title 赋值
  document.title = title
  NProgress.done()
})

export default router
