const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 3000 });

let index = 0; // 用于标记每个客户端
let clients = []; // 用于存放当前连接到这个服务的所有客户端对象

server.on("connection", ws => {
  console.log("有客户端连接进来了");

  // 1. 给当前客户端设置一个 index
  ws.index = ++index;
  // 2. 将当前客户端push进 clients
  clients.push(ws);

  // 接受客户端的消息
  ws.on("message", data => {
    // ??????????  将这个消息发送给其他的客户端。

    // 循环遍历 clinets 拿到其中的所有客户端对象，调用 send 方法，就把消息发回去。注意排除当前这个客户端
    clients.forEach(item => {
      if (item.index !== ws.index) {
        item.send(`${ws.index} : ${data}`);
      }
    });
  });
});
