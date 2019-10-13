// fs 模块提供的方法是操作文件的

const fs = require("fs");

// 写文件
fs.writeFile("./test.txt", "hello world", err => {
  console.log("写文件开始");
  if (err) {
    console.log("写入文件失败");
    console.log(err);
  } else {
    console.log("写入文件成功");
  }
});

// 同步的读取文件，如果成功，会直接return 出来
let data = fs.readFileSync("./test.txt");
console.log(data.toString());

// fs.writeFileSync("./test.txt", "hello nodejs");
// console.log("写文件结束");

// 读文件
// fs.readFile("./test.txt", (err, data) => {
//   if (err) {
//     console.log("读取失败");
//     console.log(err);
//   } else {
//     console.log(data.toString());
//   }
// });
