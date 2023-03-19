/*
 * @Date: 2023-03-18 15:19:51
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'
export default class List extends Component {
  static propTypes = {
    todo: PropTypes.array,
    getCheckedFromItem: PropTypes.func.isRequired
  }
  render() {
    return (
      <ul className="todo-main">
        {
          this.props.todos.map((todo) => {
            return <Item key={todo.id} {...todo} getCheckedFromItem={this.props.getCheckedFromItem} deletTodoByApp={this.props.deletTodoByApp}/>
          })
        }
      </ul>
    )
  }
}
