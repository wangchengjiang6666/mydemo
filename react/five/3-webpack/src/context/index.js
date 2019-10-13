import React from "react";

const context = React.createContext();

// 默认暴露
export default context;

// 常规暴露
export const Provider = context.Provider;
export const Consumer = context.Consumer;
