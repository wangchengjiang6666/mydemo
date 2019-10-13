# 根据不同的打包需求，比如开发与上线的时候

这时可以写多个配置文件， 1 个给到开发时用，1 个给到上线时用
然后通过 给 webpack 与 webpack-dev-server 这两个命令加上 --config 选项来让他们使用不同的配置文件。

webpack --config webpack.prod.conf.js
webpack-dev-server --config webpack.dev.conf.js
