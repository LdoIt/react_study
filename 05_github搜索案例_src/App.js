import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
import './App.css'
export default class app extends Component {
  state = {
    isFirst: true,
    loading: false,
    error: '',
    avatars: []
  }
  getInfoFromSearch = (info) => {
    this.setState(info)
  }
  render() {
    return (
      <div className="container">
        <Search getInfoFromSearch={this.getInfoFromSearch}/>
        <List {...this.state}/>
      </div>
    )
  }
}
