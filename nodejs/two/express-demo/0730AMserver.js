// 基于 express 快速搭建 后台服务

// 1. 引入 express 模块
const express = require("express");
const cookieParser = require("cookie-parser");

// 2. 调用 express 方法，生成 express 实例对象
const server = express();

server.use(cookieParser());

// 3. 设置路由，来响应不同的url地址请求
// 路由的简单理解：一个url地址就对应着一个不同的路由处理程序
// 不同的url地址，有不同的回调函数去响应。
// server.get("/", (req, res) => {
//   res.send("hello express");
// });

// GET http://localhost:3000/
// server.get("/", (req, res) => {
//   res.send("hello express");
// });

// // GET http://localhost:3000/abc
// server.get("/abc", (req, res) => {
//   res.send("hello abc");
// });

// // GET http://localhost:3000/a/b/c
// server.get("/a/b/c", (req, res) => {
//   res.send("hello 张三");
// });

// server.get("/abc", (req, res, next) => {
//   console.log("hello");
//   res.send("hello");
//   next(); // 继续往下寻找匹配的路由
// });

// server.get("/abc", (req, res) => {
//   console.log("world");
//   res.send("world");
// });

// POST http://localhost:3000/abc
// server.post("/abc", (req, res) => {
//   res.send("hello");
// });

// req.query
server.get("/abc", (req, res) => {
  console.log(req.query);

  res.send("hello");
});

// req.body
// 默认会得到 undefined 。
// 需要设置 如下两个中间件   中间件
// server.use(express.json());
// server.use(express.urlencoded({ extended: true }));

// server.post("/abcd", (req, res) => {
//   console.log(req.body);

//   res.send("hello");
// });

// res.cookie 设置 cookie
server.get("/setCookie", (req, res) => {
  // 给浏览器写入cookie
  res.cookie("name", "李威", {
    maxAge: 1000 * 60 * 10
  });

  res.send("cookie 设置成功");
});

// req.cookies 获取浏览器传递过来的 cookie
server.get("/getCookie", (req, res) => {
  console.log(req.cookies);

  res.send("cookie 获取成功");
});

// req.params 获取路由动态参数
// 动态路由
// GET http://localhost:3000/a/b
// GET http://localhost:3000/a/c
// GET http://localhost:3000/a/efg

// GET http://localhost:3000/a/zhangsan/18/男
server.get("/a/:name/:age/:sex", (req, res) => {
  res.redirect("https://www.baidu.com");
  // console.log(req.params);
  // console.log(req.get("Host"));

  // res.set("hello", "world");
  // res.status(505).send("hello world");
});

// 4. 监听端口号
server.listen(3000);
