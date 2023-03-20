/*
 * @Date: 2023-03-20 17:00:48
 */
import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    // props接收params参数
    const {id, title} = this.props.match.params
    return (
      <ul>
        <li>ID：{id}</li>
        <li>TITLE：{title}</li>
        <li>CONTENT：xxx</li>
      </ul>
    )
  }
}
