<template>
  <div class="page-home">
    <h1>我是Home</h1>

    <router-link :to="{ path: '/about' }">关于页</router-link>
    <router-link :to="{ path: '/list' }">列表页</router-link>

    <!-- views/Home/index.vue 这个路由页面组件的二级坑

      http://localhost:8080/#/about     views/Home/about.vue
      http://localhost:8080/#/list     views/Home/list.vue

    -->
    <router-view></router-view>
  </div>
</template>
