const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias
} = require("customize-cra");
const path = require("path");

module.exports = override(
  // antd 的按需引入
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
  }),

  // 支持 less
  addLessLoader(),

  // 支持别名
  addWebpackAlias({
    "@": path.resolve(__dirname, "./src")
  })
);
