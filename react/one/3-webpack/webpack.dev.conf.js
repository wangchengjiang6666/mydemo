const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { DefinePlugin } = require("webpack");

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle-[hash].js"
  },

  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        use: "babel-loader"
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: "file-loader"
      }
    ]
  },

  plugins: [
    // 主动帮我们生成入口html页面。并且会自动引入生成的js代码
    new HtmlWebpackPlugin({
      // template 。规定基于某个html文件来生成html文件
      template: path.resolve(__dirname, "./public/index.html")
    }),

    // 拷贝文件或者文件夹
    new CopyWebpackPlugin([
      {
        // 从哪里开始拷贝
        from: path.resolve(__dirname, "./public")
        // 要拷贝到哪里去
        // to: '',
      }
    ]),

    // 每次打包之前先将 dist 文件夹给清空
    new CleanWebpackPlugin(),

    // 设置环境变量
    new DefinePlugin({
      NODE_ENV: '"development"'
    })
  ],

  // 打包预定义模式。默认是 production
  mode: "development",

  // 配合 webpack-dev-server 使用的配置选项
  // webpack-dev-server 模块，就是让开发时更高效的一个工具包
  // 使用步骤：
  // 1. 安装 npm install --save-dev webpack-dev-server
  // 2. 使用 webpack-dev-server 命令启动项目
  // 3. 配置下 devServer 的选项
  devServer: {
    port: 9090,
    contentBase: path.resolve(__dirname, "./dist")
  }
};
