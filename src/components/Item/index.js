/*
 * @Date: 2023-03-18 15:23:42
 */
import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  // 鼠标是否进入该Item
  state = {flag: false}
  // 鼠标移出进入的回调
  handleMouse = (flag) => {
    return () => {
      this.setState({
        flag
      })
    }
  }
  // 复选框变化的回调
  boxChange = (id) => {
    return (event) => {
      // 修改app中事项done的状态
      this.props.getCheckedFromItem(id, event.target.checked)
    }
  }
  // 删除一项
  deletTodo = (id) => {
    return () => {
      this.props.deletTodoByApp(id)
    }
  }

  render() {
    const {flag} = this.state
    const {id, name, done} = this.props
    return (
      <li style={{backgroundColor: flag?'#ccc':''}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.boxChange(id)}/>
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{ display: flag?'block':'none' }} onClick={this.deletTodo(id)}>
          删除
        </button>
      </li>
    )
  }
}
