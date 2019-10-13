# react-redux

> 解决 react 中直接使用 redux 的一些不方便的问题的。能够让我们在 react 中更好的去使用 redux

使用步骤：

1. 他基于 redux 。保证项目已经安装了 redux
2. 再 安装 react-redux
3. 在 项目最外层 使用 react-redux 的 Prodiver 组件，并且传递 store
4. 需要使用仓库数据的组件，这时你只需要写成 UI 组件的形式。容器组件交给 react-redux 的 connect() 去生成。最后暴露的 生成的容器组件

## UI 组件与容器组件的概念

UI 组件，只负责数据的渲染，不负责数据的操作。不负责跟仓库打交道。所有数据一般都是通过 props
容器组件，只负责数据的操作，不负责数据的渲染。负责跟仓库打交道。所有数据一般都是通过仓库
