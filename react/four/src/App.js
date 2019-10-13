import React from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";

import TodoApp from "./components/TodoApp";
import CartApp from "./components/Cart";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/todo" component={TodoApp}></Route>
          <Route path="/cart" component={CartApp}></Route>
        </Switch>
        <Link to="/todo">去TodoApp</Link> &nbsp;
        <Link to="/cart">去Cart</Link>
      </Router>
    );
  }
}

export default App;
