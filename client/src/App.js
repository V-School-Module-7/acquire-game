import React, { Component } from 'react'
import Login from "./compnents/Login"
import HomePage from "./compnents/Homepage"
import "./App"
import {Link, Switch, Route} from "react-router-dom"
import {AppBar} from "@material-ui/core"



export default class App extends Component{

  render(){
    return (
      <div className="outer" component={AppBar}>
        <div className="container"></div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          />
          <Route path="/homepage">
            <HomePage />
          </Route>
        </Switch>
      </div>
    );
  }
}




