# vue-cli

## 安装

npm install -g @vue/cli

安装成功之后，通过 vue -v 查看当前 vue-cli 的版本

## 快速创建项目

1. 选择某个文件夹
2. 在当前选择的文件夹下，通过下面的命令创建项目
   vue create <projectName>
3. 选择预设
   3.1 默认预设，包含 babel(一款能够将 es6.7.8 这些高级的语法转换成 es5 的工具) 与 eslint(一款代码风格检查工具，提供了很多恶心的东西。)
   3.2 自行选择

## 项目结构

- node_modules 项目依赖
- public 项目的静态资源文件夹，里面存放的是一些 html、css、js、img 等 静态资源文件，并且是不需要 webpack 处理的文件。
  - favicon.ico 项目的小图标
  - index.html 项目页面模板
- src 项目的源代码文件夹。所有需要被 webpack 处理的文件，都放置在这里。
  - assets 静态资源文件夹。这里放的需要被 webpack 处理
  - components 放置 vue 的组件
  - App.vue 万年老二组件
  - main.js vue 项目中的 入口 js 文件
- .browserslistrc 浏览器兼容性的配置文件，他单个使用没有用处，结合 postcss 去使用。
- .editorconfig 编辑器的配置
- .eslintrc.js eslint 的规则配置文件
- .gitignore git 的忽略文件的配置项
- babel.config.js bable 的配置
- package-lock.json 依赖锁
- package.json 项目描述文件
- postcss.config.js postcss 的配置项
- README.md 读我文件

## process.env.NODE_ENV

是 vue 脚手架给我们提供的一个项目的环境变量。能够让我们根据他知道当前项目是运行在开发环境，还是运行在 生产环境

npm run serve 运行的项目是 开发环境 development
npm run build 运行的项目是 生产环境 production

## import Vue form 'vue' 到底引入的是什么

1. 找到 node_moduels 下面的 vue
2. 找到 他的 package.json
3. 有两个选项
   3.1 main | require() 引入的时候的文件
   3.2 module | import 'xxx' 引入的时候的文件

## vue.runtime.js 与 vue.js 的区别

1. 文件名上包含 runtime 的，代表着是一个只包含运行时的版本，只能使用 render 去渲染元素。文件更小更清。
2. 不包含 runtime 的。就是一个 完全体的版本。不光支持 render 。还支持 template。但是文件大。

## vue.common.js 与 vue.esm.js 的区别
