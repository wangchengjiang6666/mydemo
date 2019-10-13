// 1. 引入 redux 的 createStore 方法，这个方法是创建仓库的实例的。
import { createStore, applyMiddleware } from "redux";
// 2. 引入 写好的 reducers
import reducers from "./reducers";

import logger from "redux-logger";

// 3. 调用 createStore 方法来创建 仓库的实例
const store = createStore(reducers, applyMiddleware(logger));

// 4. 暴露 store 实例
export default store;
