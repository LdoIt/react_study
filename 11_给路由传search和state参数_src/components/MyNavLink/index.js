/*
 * @Date: 2023-03-20 11:19:26
 */
import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class MyNavLink extends Component {
  render() {
    return <NavLink activeClassName="selected" className="list-group-item" {...this.props}/>
  }
}
