/*
 * @Date: 2023-03-20 16:19:40
 */
import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import Detail from './Detail'
const message = [
  {id: '001', title: 'message001'},
  {id: '002', title: 'message002'},
  {id: '003', title: 'message003'}
]
export default class News extends Component {
  render() {
    return (
      <div>
        <ul>
          {
            message.map((item) => {
              // 向路由组件传递Search参数
              // return <li key={item.id}><Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link></li>
              return <li key={item.id}><Link to={{pathname: `/home/message/detail`, state: {id: item.id, title: item.title}}}>{item.title}</Link></li>
            })
          }
        </ul>
        <br/>
        {/* 接收search参数 */}
        {/* <Route path="/home/message/detail" component={Detail}/> */}
        {/* 接收state参数 */}
        <Route path="/home/message/detail" component={Detail}/>
      </div>
    )
  }
}
