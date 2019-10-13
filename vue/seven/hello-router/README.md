## ?从一个详情页直接进入到另一个详情页，会发送组件被复用，然后页面数据没有更新?

1. 监听 \$route
2. 定义 beforeRouterUpdate 路由导航钩子函数

## ? 使用编程式导航的时候，我就想使用 params 来传递动态路由的参数？

1. 需要去掉 path ，因为 path 与 params 不能共存
2. 需要在定义路由规则的时候，给当前这个详情页的路由规则，取个名字
3. 这时，只需要，传递 name 与 params

## ? $route 与 $router 有什么区别 ？

1. \$route 是当前匹配当路由信息对象，有 path 、fullPath、query、 params、meta、name
2. \$router 是路由的实例对象。就是 new VueRouter 生成的那个玩意。主要提供一些个方法供我们实现编程式导航。

## ？vue 路由有几种模式 , 他们之间有什么不同点 ？

2 种。一种是目前一直的 hash 模式。另外一种是 history 模式。通过通过在 new VueRouter 的时候设置 mode 选项来选择使用那个模式。

不同点：

1.  url 地址的表现不同。hash 模式在 url 地址栏有#号，而 history 没有
2.  实现原理不同。
    2.1 hash 模式是通过 onHashChange 这个事件来监听 hash 的变化，然后去做相应的处理。
    2.2 history 模式是通过 html5 中的 新增的 history 相关的 api 来做的处理。
    history.pushState()
    history.replaceState()

    window.onpopstate

3.  history 模式，在打包上线之后，可能会出现 404 的问题。而 hash 没有。
