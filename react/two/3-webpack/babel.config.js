module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    [
      "import",
      {
        libraryName: "antd",
        libraryDirectory: "es",
        style: "css" // `style: true` 会加载 less 文件
      }
    ]
  ]
};
