/*
 * @Date: 2023-03-18 10:56:18
 */
// react核心库中分别暴露了 Component方便使用
import React, {Component} from 'react'
import Hello from './components/Hello'
import Welcome from './components/Welcome'
import './App.css'
export default class App extends Component {
  render() {
    return (
      <div>
        <Hello/>
        <Welcome/>
      </div>
    )
  }
}