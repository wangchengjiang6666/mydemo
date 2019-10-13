# 基于 webpack 自己搭建 React 开发环境

1. 创建项目， 2-webpack 就是项目根目录
2. 项目初始化
3. 项目 git 管理, 添加忽略文件
4. 安装项目需要的依赖
   4.1 开发依赖
   ```bash
   yarn add webpack webpack-cli -D
   ```
   4.2 生产依赖
   ```bash
   yarn add react react-dom
   ```
5. 创建了一个 src/index.js 作为项目的入口 js 文件
6. 创建了一个 dist/index.html 作为项目运行时的页面文件
7. dist/index.html 引入了一个 相同目录下的 main.js （默认不存在，经过 webpack 打包之后生成的文件）
8. webpack 打包的方式
   8.1 npx webpack
   8.2 如果全局安装了 webpack 的话，可以直接使用 webpack . 但是不推荐
   8.3 直接去到当前项目的 node_modules 里面找到 webpack 的命令运行 `./node_modules/.bin/webpack`
   8.4 使用 npm 脚本

   PS: 如果项目根目录下有一个 webpack.config.js 那么打包时会按照这个配置文件来进行打包

dist/main.js 是 webpack 基于 src/index.js 这个入口 js 打包生成的。
