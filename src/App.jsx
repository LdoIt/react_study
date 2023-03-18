// react核心库中分别暴露了 Component方便使用
import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'
export default class App extends Component {
  state = {todos: [
    {id: '001', name: '吃饭', done: false},
    {id: '002', name: '睡觉', done: false},
    {id: '003', name: '打豆豆', done: false}
  ]}
  // 从Header中拿到新数据并添加到state中
  getTodoFromHeader = (todo) => {
    const oldTodo = this.state.todos
    this.setState({
      todos: [todo, ...oldTodo]
    })
  }
  // 从Item中拿到checkbox的状态
  getCheckedFromItem = (id, done) => {
    const {todos: oldTodo} = this.state
    const todos = oldTodo.map((todo) => {
      if (todo.id === id) {
        return {...todo, done}
      }else {
        return todo
      }
    })
    this.setState({
      todos
    })
  }
  render() {
    const {todos} = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header getTodoFromHeader={this.getTodoFromHeader}/>
          <List todos={todos} getCheckedFromItem={this.getCheckedFromItem}/>
          <Footer/>
        </div>
      </div>
    )
  }
}
