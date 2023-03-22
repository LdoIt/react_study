/*
 * @Date: 2023-03-22 19:17:29
 */
import React, { Component } from 'react'
import store from './redux/store'
import Count from './containers/Count'
export default class App extends Component {
  render() {
    return (
      <div>
        <Count store={store}/>
      </div>
    )
  }
}

