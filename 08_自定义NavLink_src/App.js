/*
 * @Date: 2023-03-20 11:10:27
 */
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MyNavLink from './components/MyNavLink'
import About from './pages/About'
import Home from './pages/Home'
export default class App extends Component {
  render() {
    console.log(Test);
    console.log('Test');
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
                <MyNavLink to="/about">About</MyNavLink>
                <MyNavLink to="/home">Home</MyNavLink>
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
