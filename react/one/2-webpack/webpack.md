 ## 源代码

src 里面的代码就是源代码

## 分发代码

配置的 dist 文件夹，
构建过程产生的代码最小化和优化后的“输出”目录

## webpack 的配置文件

刚才我们使用 webpack ，webpack 是按照一种默认的配置去运行的。但是我们也可以手动来写上配置。

项目根目录下面创建一个 webpack.config.js 文件
这个中需要暴露一个对象。对象里面的选项就是 webpack 的配置项

主要有 4 大配置项

1. 入口配置
2. 出口配置
3. 装换器配置
4. 插件配置

## 入口配置

规定 webpack 用哪个文件做为项目的入口文件，默认是 src/index.js

## 出口配置

规定 webpack 打包生成的文件名字叫什么，生成的文件放在哪个文件夹下面。默认生成的文件名叫做 main.js 默认存放打包生成的文件夹是 dist

## 装换器配置

webpack 默认只会对 js 文件或 json 文件做打包
如果我们需要让 webpack 对 css 文件做打包， 就会报错

#### 让项目支持 css 文件

1. 安装相对应的 loader

```bash
npm install --save-dev css-loader style-loader
```

2. 配置 webpack 选项

```js
module: {
  // 转换器规则配置
  rules: [
    {
      test: /\.css$/,
      // 如果需要多个转换器处理这种文件类型，那么需要将 use 配置成 数组格式，并且以倒序的方式来写上转换器
      // css-loader 将css文件转换成webpack能够识别的 模块文件
      // style-loader 将css代码写入到页面中的style标签内的转换器
      use: ["style-loader", "css-loader"]
    }
  ];
}
```

#### 让项目支持 sass 文件

1. 安装相对应的 loader

css-loader style-loader sass-loader node-sass

2. 配置转换器规则

```js
{
  test: /\.(scss|sass)$/,
  use: ["style-loader", "css-loader", "sass-loader"]
}
```

#### 让项目支持 less 文件

1. 安装相对应的 loader

css-loader style-loader less-loader less

2. 配置转换器规则

```js
{
  test: /\.less$/,
  use: ["style-loader", "css-loader", "less-loader"]
}
```

#### 让项目支持 图片 文件

1. 安装 file-loader 转换器
2. 配置转换器规则

#### 让项目支持 jsx 语法

1. 安装 react 与 react-dom
2. 安装 babel

```bash
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react
npm install --save-dev babel-loader
```

@babel/core babel 的核心模块
@babel/preset-env 转换 es6.7.8 等语法的预设
@babel/preset-react 转换 react 中 jsx 语法

？babel 插件与预设的概念 ？
插件是解决某个小功能点的问题。预设是一系列插件的集合

3. 配置 babel 的配置文件
   在项目根目录下创建一个 babel.config.js || .babelrc || package.json 中 babel 字段

4. 配置 webpack 转换器规则
