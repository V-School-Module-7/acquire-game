import React, { Component } from 'react'
import Login from "./components/Login"
import WaitingRoom from "./components/WaitingRoom"
import StartAGame from "./components/StartAGame"
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

          </Route>
          <Route path="/login">
          <Login />
          {/* <WaitingRoom/> */}
          </Route>
          <Route path="/startagame">
            <StartAGame />
            </Route>
          
          <Route path="/waitingroom">
          <WaitingRoom/>
          </Route>
        </Switch>
      </div>
    );
  }
}




