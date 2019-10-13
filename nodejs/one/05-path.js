// path 模块 处理文件路径相关的问题的
const path = require("path");

// path.resolve();
// path.join();

// 相同点： 都能够接受多个参数，每个参数都是一个路径。
// 不同点： 他们处理路径的方式不一样
//        1. resolve 方法，返回的一定是一个 绝对路径，而 join 方法只是简单的将多个参数拼接在一起
//        2. resolve 方法，如果某个参数是以根路径开始的，那么这个参数前面的参数都将会被删除掉。而join不一样

// let str = path.resolve("./utils", "./index.js");
// console.log(str); // F:\1907\1-nodejs\day01\utils\index.js

// let str = path.join("./utils", "./index.js");
// console.log(str); // utils\index.js

// let str1 = path.resolve("c:", "D:", "a.txt");
// console.log(str1);
// let str2 = path.join("c:", "D:", "a.txt");
// console.log(str2);

// 全局变量
// __dirname; 代表着当前运行的文件所在的目录的绝对路径

// __filename; 代表着当前运行的文件所在的绝对路径
console.log(__dirname);
console.log(__filename);

console.log(path.resolve(__dirname, "./utils/index.js"));
console.log(path.join(__dirname, "./utils/index.js"));
