# 使用步骤

1. 安装 vuex

```shell
npm install --save vuex
```

2. 在 src 目录下创建一个 store/index.js 文件。配置仓库的数据
   2.1 需要思考项目的那些数据要放在仓库。

3. 需要在 main.js 中，也就是 new Vue 的时候，配置 store 这个选项，选项的值就是 store 的实例对象

#### ？如何将仓库的数据拿到组件中去使用了？

1. mapState() 这个辅助函数

```js
import { mapState } from "vuex";

computed: {
  ...mapState(["仓库中 state 的名字"]);
}
```

#### ? 如何在组件中修改仓库的数据 ?

1. 首先在仓库的 mutations 部分定义一个修改 state 数据的方法
2. 组件中 使用 mapMutations 这个辅助函数

```js
import { mapMutations } from 'vuex';

methods: {
  ...mapMutations(['仓库中某个 mutation 的名字'])
}
```

#### ？如何获取仓库中 getters 的数据 ？

使用 mapGetters 这个辅助函数即可

#### ? 如何异步的修改 仓库的 state 数据， 比如 ajax 、setTimeOut ？

首先要明确一点，不能在 mutation 里面去写异步代码。

一、 你在组件中，异步完成之后，再去 commit mutation

二、 就是使用 actions

mapActions 辅助函数
