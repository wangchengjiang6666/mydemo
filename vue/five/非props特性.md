# 非 props 特性

调用组件的时候，传递的属性，如果在组件定义的时候，没有通过 props 去声明，那么这个属性就是一个 非 props 的特性

```js
Vue.component("hello", {
  props: ["name", "age"]
});
```

```html
<hello name="张三" age="18" id="box" class="c1" title="hellohello"></hello>
```

#### 非 props 特性的一些情况

1. 继承。会自动将这些非 props 特性主动添加到 组件的 根元素身上
2. 继承会有替换的情况。
   2.1 class 会合并
   2.2 style 会合并
3. 禁止继承，通过某一个选项（inheritAttrs）设置为 false 让这个组件不允许继承。但是 class 与 style 例外
4. 组件有一个 \$attrs 实例属性，它身上包含着调用组件时传递非 props 特性。class 与 style 是个例外

#### 基础组件，通过 \$attrs 与 inheritAttrs 为 false 。来实现

基础组件就是把一些我们平常经常会使用的元素，做一个简单的组件封装。比如：

1. input
2. button
   <base-button type="success"></base-button>
   <base-button type="error"></base-button>
