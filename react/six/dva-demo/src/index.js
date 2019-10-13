import dva from "dva";
import "./index.css";

// 1. Initialize 初始化dva实例
const app = dva();

// 2. Plugins 使用插件
// app.use({});

// 3. Model 注册 model redux 仓库相关
app.model(require("./models/example").default);

// 4. Router 路由配置
app.router(require("./router").default);

// 5. Start 启动项目
app.start("#root");
