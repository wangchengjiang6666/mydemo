// 后端代码

// 1. 引入 ws 模块
const WebSocket = require("ws");

// 2. 创建 ws 的服务
const server = new WebSocket.Server({ port: 3000 });

// 3. 监听客户端的请求
server.on("connection", ws => {
  console.log("有客户端连接进来了");

  // ws 就是 当前连接进来的 webSocket 实例
  ws.send("来了，老弟");

  // ws 监听 message ,客户端发来的消息
  ws.on("message", data => {
    console.log(data);
  });
});
