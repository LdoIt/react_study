/*
 * @Date: 2023-03-20 17:00:48
 */
import React, { Component } from 'react'
// 转换search参数用到的库
// import qs from 'qs'
export default class Detail extends Component {
  render() {
    // props接收params参数
    const {id, title} = this.props.match.params

    // props接收search参数
    // const {id, title} = qs.parse(this.props.location.search.slice(1));

    // state参数在
    // const {id, title} = this.props.location.state || {}
    return (
      <ul>
        <li>ID：{id}</li>
        <li>TITLE：{title}</li>
        <li>CONTENT：xxx</li>
      </ul>
    )
  }
}
