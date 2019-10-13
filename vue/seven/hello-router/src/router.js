import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   component: () => import('./views/Home/index.vue'),
  //   children: [
  //     {
  //       path: 'about',
  //       component: () => import('./views/Home/about.vue')
  //     },
  //     {
  //       path: 'list',
  //       component: () => import('./views/Home/list.vue')
  //     }
  //   ]
  // },
  {
    path: '/detail/:id',
    name: 'abc',
    component: () => import('./views/Detail/index.vue')
  },
  {
    path: '/hello',
    alias: '/world',
    // 不是使用 component  而是 components
    components: {
      // 坑的名字: 路由页面组件
      top: () => import('./views/Home/about.vue'),
      bottom: () => import('./views/Home/list.vue')
    }
  },
  {
    path: '*',
    redirect: {
      path: '/hello'
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
