import React, { Fragment } from "react";
import { Route, NavLink, Redirect, Switch } from "react-router-dom";
import AuthRoute from "../utils/AuthRoute";

import Home from "./Home";
import List from "./List";
import About from "./About";

class Index extends React.Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/list" component={List}></Route>
          <AuthRoute path="/about" component={About}></AuthRoute>
          <Redirect to="/home"></Redirect>
        </Switch>
        <hr />
        <NavLink to="/home" activeClassName="z-act">
          首页
        </NavLink>
        &nbsp;
        <NavLink to="/list" activeClassName="z-act">
          列表页
        </NavLink>
        &nbsp;
        <NavLink to="/about" activeClassName="z-act">
          关于页
        </NavLink>
        &nbsp;
      </Fragment>
    );
  }
}

export default Index;
