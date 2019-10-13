const http = require("http");
const url = require("url");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  // 处理一下 post 请求传递过来的参数
  // 1. 我如何发送 post 请求    模拟请求工具（postman | insomina）

  // 2. 如何得到前端传递过来的post请求的参数 {username: 'admin', password: 123}
  // 2.1 监听请求传输的过程
  let raw = ""; // 请求体 
  req.on("data", chunk => {
    // chunk 每次传输的时候的数据
    // data 事件，在请求体大的情况下，会多次进入。
    raw += chunk;
  });
  // 2.2 监听请求传输完成
  req.on("end", () => {
    console.log(raw); // 查询字符串
    // querystring 模块
    let obj = querystring.parse(raw);
    console.log(obj);

    res.write("hello" + obj.username);
    res.end();
  });
  // res.end("hello world");
  // res.write("hello world");
  // res.end();
});

server.listen(3000);
