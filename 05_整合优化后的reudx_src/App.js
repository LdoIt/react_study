/*
 * @Date: 2023-03-22 19:17:29
 */
import React, { Component } from 'react'
// 引入react-redux后不需要一个个给容器组件传store，在index.js中使用provider
// import store from './redux/store'
import Count from './containers/Count'
export default class App extends Component {
  render() {
    return (
      <div>
        <Count/>
      </div>
    )
  }
}

