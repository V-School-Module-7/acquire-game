import React, { Component } from 'react'
import Login from "./compnents/Login"
import HomePage from "./compnents/Homepage"

import {Link, Switch, Route} from "react-router-dom"
import {AppBar, Toolbar, Button} from "@material-ui/core"



export default class App extends Component{

  render(){
    return (
      <div component={AppBar}>
        <Toolbar>
          <h3>Logo</h3>
          <div className="links">
            <Link to="/homepage" component={Button}>
              Lobby
            </Link>
          </div>
        </Toolbar>

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




