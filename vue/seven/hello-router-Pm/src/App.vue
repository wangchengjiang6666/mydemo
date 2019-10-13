<template>
  <!--
    这个地方的坑，是一级坑，这个坑会根据url地址与路由规则去做匹配，匹配当的路由他所定义的路由页面组件，就会被渲染在这个坑里面。

    http://localhost:8080/#/        views/Home/index.vue
    http://localhost:8080/#/detail  views/Detail/index.vue
    http://localhost:8080/#/abc     没有东西可以渲染

    http://locahost:8080/#/about    views/Home/index.vue

  -->

  <!--
    http://localhost:8080/#/hello       上面坑渲染 about  下面坑渲染 list

    1. 给这些分别取名字

  -->

  <div>
    <router-view></router-view>

    <!-- <router-view name="top"></router-view>

    <hr />

    <router-view name="bottom"></router-view>-->
  </div>
</template>
