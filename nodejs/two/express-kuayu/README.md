# express

基于 Nodejs Web 开发框架

Koa

egg

## 快速入门

1. 创建一个空的文件夹，项目
2. 初始化这个项目 npm init
3. 安装项目的依赖模块
   npm install --save express
4. git 管理
   4.1 git 初始化
   4.2 编辑 .gitignore 文件
5. 项目目录下创建一个 server.js 作为项目的入口文件（启动文件）
6. 写代码
7. 设置 npm 脚本，并启动
   比如说 有一个 nodemon server.js 这个命令。太长了，记不下来。
   ```js
   "scripts": {
    "start": "node server.js"
   },
   ```

## express 路由

语法：
app.methods(path, callback, callback, callback, callback )

- app 是 express 实例对象
- methods 是请求的方法 get | post | put | update | delete | ...
- path 就是 url 地址 pathname
- callback 回调函数，路由的处理函数
  - req 必须以 / 开头
  - res 这里 req res 就是 原生 nodejs 中的 req res。但是比原生中要多一些属性与方法，多出来的这些是 express 给我们加上去。
  - next 是一个方法，调用这个方法会让路由继续匹配下一个能够匹配上的。

重点：

1. 路由代码与 http 请求地址的对应关系。

// GET http://localhost:3000/
server.get('/', (req, res) => { res.send('hello express') })

// GET http://localhost:3000/abc
server.get('/abc', (req, res) => { res.send('hello abc') })

// GET http://localhost:3000/a/b/c
server.get('/a/b/c', (req, res) => { res.send('hello 张三') })

2. 如果有多个相同路径的路由，那么会按照书写顺序找到第一个。

server.get('/abc', (req, res) => { res.send('hello') });

server.get('/abc', (req, res) => { res.send('world') });

可以让他按照顺序找到下一个匹配的路由 next()

server.get('/abc', (req, res, next) => { res.send('hello'); next() });

server.get('/abc', (req, res) => { res.send('world') });

## express 中 request 与 response

了解 这两个 对象中别 express 增加的属性与方法

- req.query 直接能获取到 get 请求传递过来的参数
- req.body 直接能获取到 post 请求传递过来的参数
  - 需要设置 express.json 和 express.urlencode 这两个中间件才行
- req.cookies 获取 cookies
  - 需要使用 cookie-parser 中间件
  1. 安装 cookie-parser || npm install --save cookie-parser
  2. 在 server.js 中，引入 cookie-parser 模块
  3. 在 server.js 中，调用 cookie-parser

## express 静态资源托管

思考如何通过这个 express 让某个 url 地址能够输出一个 html 页面

1. 使用 res.sendFile 太麻烦了
   这是就需要静态资源托管
   将项目下的某个文件夹作为静态资源托管的文件夹。后续只要是想访问这个文件夹的资源，都可以通过某种规则的路径去访问即可。

使用步骤：
app.use(express.static(path.resolve(\_\_dirname, './public')))

这时可以将 public 文件成为是 web 服务的 根目录。/
localhost:3000/
localhost:3000/css/style.css
localhost:3000/img/hero.jpg

我们可以通过设置来修改静态资源托管的 根路径
localhost:3000/static/index.html || localhost:3000/static
localhost:3000/static/css/style.css
localhost:3000/static/img/hero.jpg

app.use('/static', express.static(path.resolve(\_\_dirname, './public')))

## express 中间件

中间件其实就是一个中间函数，在请求与响应之前做了一些中间处理的代码

1. express.json()
2. express.urlencode()
3. cookieParser()
4. express.static()

一、自己实现一个日志输出的中间件
在这个项目中所有的请求，都要输出一个 日志。日志包含请求的机器 ip 地址。请求的路径。请求的时间。

二、实现一个让每个路由身上都能访问到 req.requestTime 的中间件

三、思考实现一个 cookieParser() 中间件

    1. req.get('Cookies') 请求头中的数据
    2. req.cookies = 1中拿出的数据经过转化成的对象

四、可以配置的中间件
希望这个中间件能够通过不同的设置，让其 requestTime 是一个不同的格式。
比如 1. 时间戳 2. 年份 3. 月份

momentjs - 日期时间格式化工具类

1. npm install --save moment
2. 引入并使用
