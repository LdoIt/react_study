/*
 * @Date: 2023-03-20 12:48:27
 */
import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import Message from './Message'
import News from './News'
export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home的内容</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
          </ul>
          <Switch>
            <Route path="/home/message" component={Message}/>
            <Route path="/home/news" component={News}/>
            <Redirect to="/home/news"/>
          </Switch>
        </div>
      </div>
    )
  }
}
