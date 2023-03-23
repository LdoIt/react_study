/*
 * @Date: 2023-03-23 08:41:52
 */
import React, { Component } from 'react'
// 引入connect创建容器组件，用于连接UI组件与redux
import {connect} from 'react-redux'
// 引入创建action的函数
import {createIncrementAction, createDecrementAction, createAsyncAction} from '../../redux/count_action'
// mapStateToProps返回一个对象，因为子组件要通过props接收，该函数用于传递状态
// mapDispatchToProps返回一个对象传递给UI组件，用于操作状态，该参数还有对象写法
// 定义UI组件
class Count extends Component {
  increment = () => {
    const {value} = this.selectEle
    this.props.increment(value*1)
  }
  decrement = () => {
    const {value} = this.selectEle
    this.props.decrement(value*1)
  }
  incrementIfOdd = () => {
    const {value} = this.selectEle
    const {count} = this.props
    if (count%2!==0) {
      this.props.increment(value*1)
    }
  }
  incrementAsync = () => {
    const {value} = this.selectEle
    this.props.asyncIncrement(value*1, 500)
    // setTimeout(() => {
    //   store.dispatch(createIncrementAction(value*1))
    // }, 500)
  }
  render() {
    return (
      <div>
        <h1>当前求和为：{this.props.count}</h1>
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
// 创建并暴露Count的容器组件
export default connect(state => ({count: state}),{increment: createIncrementAction, decrement: createDecrementAction,asyncIncrement: createAsyncAction})(Count)
