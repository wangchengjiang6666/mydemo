# v-if 与 v-show 的区别

1. 首先他们都能够控制元素的显示和隐藏
2. v-if 才是真真的条件渲染，条件为真，元素显示。条件为假，元素销毁。
3. v-show 才是真真的显示隐藏，条件为假，设置元素的 display: none;
4. v-if 有配套的 v-else | v-else-if | template 。而 v-show 没有
5. v-if 有更高的切换开销，v-show 有更高的初次渲染开销。

#### 根据以上的区别点，思考什么时候用 v-if 。什么时候用 v-show

1. 当元素需要频繁的显示隐藏切换时，采用 v-show .
