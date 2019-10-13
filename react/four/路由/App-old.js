// 万年老二组件
import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./views/Index";
import Detail from "./views/Detail";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* switch ，让路由匹配只匹配一次，匹配上之后，不再往下匹配。 */}
          <Route path="/detail/:id" component={Detail}></Route>
          <Route path="/" component={Index}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
