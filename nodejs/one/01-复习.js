// node是什么？
// 后台语言，跟 javascrip 很像

// node文件的后缀是什么？
// .js

// node文件怎么运行？
// 通过 node 命令，打开命令提示符（cmd）,进入到要运行的文件的目录下，通过 node fileName

// nodejs什么时候出现的？
// 2009年，流行的年代是 2013 2015

// nodejs的安装
// 安装完成，打开 cmd 运行 node -v 能够输出版本号，就说明安装成功了。npm -v

// nodejs中的模块化是什么概念？
// const http = require('http')
// 一个文件就是一个模块，提供了特定的功能点。如何使用这个模块
// 1. 核心模块      require('模块名字')
// 2. 第三方模块    npm 安装第三方模块      require('模块名字')
// 3. 自己写的模块  require('相对路径')

// 模块化规范有哪些？
// commonJS     ESModule      AMD           CMD
// nodejs       es6           requrei.js    sea.js
// AMD  ->  CMD  -> ESModule(2015)

// nodejs中的核心模块你用过哪些
// 1. http
// 2. fs
// 3. path
// 4. url
// const url = require("url");
// let str = "http://localhost:3000/?name=张三&age=18";
// // url.parse 方法，
// // 解析 url 字符串 为 url 对象
// // 如果将第二个参数传递为 true， 那么得到的 url 对象中 query 属性会被解析为对象的形式
// const urlObj = url.parse(str, true);
// console.log(urlObj.query.name);
// console.log(urlObj.query.age);
// url.format 方法
// 5. querystring
