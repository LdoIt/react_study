import React, { Component } from 'react'
import PropTypes from 'prop-types'
// 引入第三方库，生成唯一的id
import { nanoid } from 'nanoid'
import './index.css'
export default class Header extends Component {
  static propTypes = {
    getTodoFromHeader: PropTypes.func.isRequired
  }
  // 处理输入框变化的回调
  handleInput = event => {
    const { value } = event.target
    if (event.keyCode !== 13) return
    if (!value.trim()) {
      alert('不能输入空值')
    }else {
      let newTodo = { id: nanoid(), name: value, done: false }
      // 将新增加的数据传给 app.js
      this.props.getTodoFromHeader(newTodo)
      // 清空input
      event.target.value = ''
    }
  }
  render() {
    return (
      <div className="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleInput} />
      </div>
    )
  }
}
