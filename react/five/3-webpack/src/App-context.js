import React from "react";
import One from "./components/One";

// 1. 引入 context 实例
import { Provider } from "./context/index";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "App"
    };
  }

  render() {
    return (
      <Provider value={this.state.name}>
        <h1>我的天呀</h1>

        <One></One>
      </Provider>
    );
  }
}

export default App;
