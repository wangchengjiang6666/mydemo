import Vue from "vue";

import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/a",
      component: () => import("./views/ProductList.vue")
    },
    {
      path: "/b",
      component: () => import("./views/CatList.vue")
    },
    {
      path: "*",
      redirect: "/a"
    }
  ]
});
