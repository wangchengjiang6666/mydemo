const express = require("express");
const server = express();

// 设置使用何种模板引擎
server.set("view engine", "ejs");

// 设置模板页面在那个路径下
server.set("views", "./views");

// 路由 /hello
server.get("/hello", (req, res) => {
  // res.render('要渲染的模板页面的名字', '要携带到模板页面中的数据')
  res.render("hello", {
    name: "",
    str: "<h1>我的天呀</h1>",
    list: ["apple", "banana", "orange", "西瓜"]
  });
});

server.listen(3000);
