/*
 * @Date: 2023-03-18 15:21:35
 */
import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
  checkAll = (event) => {
    this.props.checkAllOrNot(event.target.checked)
  }
  // 清除所有已完成
  clearAllDone = () => {
    this.props.clearAllDone()
  }
  render() {
    // 已完成的个数
    const doneCount = this.props.todos.reduce((pre, cur) => pre+(cur.done?1:0), 0)
    // 总数
    const total = this.props.todos.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={(doneCount === total ? true : false) && (total !== 0)} onChange={this.checkAll}/>
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.clearAllDone}>清除已完成任务</button>
      </div>
    )
  }
}
