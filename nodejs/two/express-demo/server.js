const express = require("express");
const fs = require("fs");
const path = require("path");
const moment = require("moment");
const server = express();

// 配置静态资源托管的文件夹
server.use("/static", express.static(path.resolve(__dirname, "./public")));

// 自己实现一个中间件，中间件其实就是一个函数，携带者 req | res | next 这三个参数的函数
// 1. 定义这样的一个中间件函数出来
//      注意。
//        1. 中间件函数，在做完事情之后，必须调用 next()
//        2. 中间件函数的调用需要放在需要使用的位置的前面。
const logger = (req, res, next) => {
  console.log(
    `请求的ip地址是：${req.ip}, 请求的路径是：${
      req.url
    }, 请求的时间是：${new Date().getTime()}`
  );
  next();
};
// 2. 使用 server.use() 调用这个中间件 use 方法需要接受的是一个携带了 req| res| next 的函数
server.use(logger);

// const helloWorld = (req, res, next) => {
//   req.requestTime = new Date().getTime();
//   next();
// };

// server.use(helloWorld);

// const helloWorld = num => {
//   return (req, res, next) => {
//     let date = new Date();
//     if (num === 1) {
//       req.requestTime = date.getTime();
//     }
//     if (num === 2) {
//       req.requestTime = date.getFullYear();
//     }
//     if (num === 3) {
//       req.requestTime = date.getMonth();
//     }
//     next();
//   };
// };

const helloWorld = str => {
  return (req, res, next) => {
    req.requestTime = moment().format(str);
    next();
  };
};

// use 是全局中间件的设置
// server.use(helloWorld(2)); // YYYY-mm-dd  yy-mm-dd hh:mm:ss
//

// 还可以局部设置，给具体某一个路由设置某个中间架

server.get("/a", helloWorld("YYYY-MM-DD"), (req, res) => {
  console.log(req.requestTime);
  res.send("a");
});

server.get("/b", helloWorld("YYYY-MM-DD HH:mm:ss"), (req, res) => {
  console.log(req.requestTime);
  res.send("b");
});

server.get("/c", helloWorld(), (req, res) => {
  console.log(req.requestTime);
  res.send("c");
});

server.get("/setCookie", (req, res) => {
  res.cookie("name", "李威", { maxAge: 1000 * 60 * 10 });
  res.send("写入成功");
});

// GET http://localhost:3000/
// server.get("/", (req, res, next) => {
//   // 一、读文件
//   // 1. 读文件
//   // let data = fs.readFileSync("./public/index.html");
//   // let htmlStr = data.toString();
//   // res.set("Content-Type", "text/html");
//   // res.send(htmlStr);

//   // 二、直接使用 res.sendFile
//   res.sendFile(path.resolve(__dirname, "./public/index.html"));

//   // 三、使用  res.render 需要  模板引擎
// });

// // GET http://localhost:3000/css/style.css
// server.get("/css/style.css", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./public/css/style.css"));
// });

// // GET http://localhost:3000/a.jpg
// server.get("/a.jpg", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./public/img/hero.jpg"));
// });

// // GET http://localhost:3000/js/index.js
// server.get("/js/index.js", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./public/js/index.js"));
// });

server.listen(3000);
