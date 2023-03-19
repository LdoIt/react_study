import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
export default class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <div className="page-header">
                <h2>React Router Demo</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/* <a className="list-group-item active" href="./about.html">About</a>
                <a className="list-group-item" href="./home.html">Home</a> */}
                <NavLink activeClassName="selected" className="list-group-item" to="/about">
                  About
                </NavLink>
                <NavLink activeClassName="selected" className="list-group-item" to="/home">
                  Home
                </NavLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
