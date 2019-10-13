import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./views/home/index";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
