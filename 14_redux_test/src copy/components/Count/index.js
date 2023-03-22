/*
 * @Date: 2023-03-21 15:20:08
 */
import React, { Component } from 'react'
import store from '../../redux/store'
// 引入创建action的函数
import {createIncrementAction, createDecrementAction, createAsyncAction} from '../../redux/count_action'
export default class Count extends Component {
  increment = () => {
    const {value} = this.selectEle
    store.dispatch(createIncrementAction(value*1))
  }
  decrement = () => {
    const {value} = this.selectEle
    store.dispatch(createDecrementAction(value*1))
  }
  incrementIfOdd = () => {
    const {value} = this.selectEle
    if ((store.getState())%2!==0) {
      store.dispatch(createIncrementAction(value*1))
    }
  }
  incrementAsync = () => {
    const {value} = this.selectEle
    store.dispatch(createAsyncAction(value*1, 500))
    // setTimeout(() => {
    //   store.dispatch(createIncrementAction(value*1))
    // }, 500)
  }
  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
        <select ref={(c) => this.selectEle = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}
