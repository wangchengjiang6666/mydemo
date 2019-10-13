# props 属性集合

vue 的组件可以看成是一个方法，注册组件，就类似于在定义方法。调用组件时，就类似于调用方法。方法可以传递参数。。。这里的 props 就可以理解为 这个组件接收到的 参数集合。

props 跟 data 很像，都是数据，只是 data 是组件自身的数据，而 props 是从外面接收到的数据。但是都可以直接在组件内部去使用。

#### props 的使用

1. 像方法一样，先在注册组件的时候，通过 props 选项定义需要接收的 prop

```js
Vue.component("hello", {
  props: ["name", "age"],
  template: `
    <div>
      {{ name }}
    </div>
  `
});
```

2. 在调用组件的时候，在组件的标签身上传递 prop

```html
<hello name="李威" age="18"></hello>
```

function add (num) {
console.log(num);
}

add()
