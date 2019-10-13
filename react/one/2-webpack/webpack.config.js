// webpack的配置文件
const path = require("path");

module.exports = {
  // 选项配置项
  // 入口配置
  // entry: "./src/hello.js",
  // 上面这种是个简写方式
  entry: {
    // app: "./src/hello.js",

    // 多入口的配置
    // a1: "./src/a1.js",
    // a2: "./src/a2.js"

    app: "./src/demo.js"
  },

  // 出口配置
  output: {
    path: path.resolve(__dirname, "./dist"),
    // filename 可以采用占位符的配置 [name] - [hash]
    filename: "bundle-[name].js"
  },

  module: {
    // 转换器规则配置
    rules: [
      {
        test: /\.css$/,
        // 如果需要多个转换器处理这种文件类型，那么需要将 use 配置成 数组格式，并且以倒序的方式来写上转换器
        // css-loader 将css文件转换成webpack能够识别的 模块文件
        // style-loader 将css代码写入到页面中的style标签内的转换器
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(jpg|png|jpeg|gif)$/,
        use: "file-loader"
      },
      {
        test: /\.js$/,
        use: "babel-loader"
      }
    ]
  }
};
