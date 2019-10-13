// 如何通过 http 模块来创建一个 web 服务呢？

// 1. 引入需要用到的模块
const http = require("http");
const utils = require("./utils/index"); // { getQuery: fn}
const url = require("url");

// 2. 调用 http createServer 方法 来创建 服务
// http://localhost:3000

// http://localhost:3000?name=张三
const server = http.createServer((request, response) => {
  // request 请求
  // response 响应

  // request.url 得到url地址
  // console.log(request.url);
  // let params = utils.getQuery(request.url);
  // console.log(params);
  let params = url.parse(request.url, true).query;

  // 处理请求

  // 设置响应头
  response.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8"
  });

  // 响应数据
  response.write("我的天，" + params.name + "真帅");
  // 结束请求
  response.end();
});

// 3. 监听本地电脑的某个端口号，来启动服务
server.listen(3000);
console.log("服务启动成功，启动在了 http://localhost:3000");
// 端口号的使用范围    0 - 65535 自己选择某个没有被占用的端口号，比如 3000 8080 9090
// 思考一些端口号， 80  apache nginx  http
// 443  https
// 3306 mysql
