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
  // push操作
  pushDetail = (id, title) => {
    const {push} = this.props.history
    // params传参
    push(`/home/message/detail/${id}/${title}`)
    // state传参
    // push('/home/message/detail', {id, title})
    // search传参
    // push(`/home/message/detail?id=${id}&title=${title}`)
  }
  // replace操作
  replaceDetail = (id, title) => {
    const {replace} = this.props.history
    // params传参
    replace(`/home/message/detail/${id}/${title}`)
    // state传参
    // replace('/home/message/detail', {id, title})
    // search传参
    // replace(`/home/message/detail?id=${id}&title=${title}`)
  }
  // go操作
  goto = () => {
    const {go} = this.props.history
    go(1)
  }
  // back操作
  back = () => {
    const {goBack} = this.props.history
    goBack()
  }
  render() {
    return (
      <div>
        <ul>
          {
            message.map((item) => {
              // 向路由组件传递Search参数
              // return <li key={item.id}><Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link></li>
              // 向路由组件传递state参数
              // return <li replace key={item.id}><Link to={{pathname: `/home/message/detail`, state: {id: item.id, title: item.title}}}>{item.title}</Link></li>

              return (
                <li key={item.id}>
                  {/* <Link to={{pathname: `/home/message/detail`, state: {id: item.id, title: item.title}}}>{item.title}</Link> */}
                  {/* <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}
                  <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link>
                  &nbsp;<button onClick={() => this.pushDetail(item.id, item.title)}>push</button>&nbsp;&nbsp;&nbsp;
                  <button onClick={() => this.replaceDetail(item.id, item.title)}>replace</button>
                </li>
              )
            })
          }
          <br/>
          <button onClick={() => this.back()}>goBack</button><button onClick={() => this.goto()}>go</button>
        </ul>
        <br/>
        {/* 接收params参数 */}
        <Route path="/home/message/detail/:id/:title" component={Detail}/>
        {/* 接收search参数 */}
        {/* <Route path="/home/message/detail" component={Detail}/> */}
        {/* 接收state参数 */}
        {/* <Route path="/home/message/detail" component={Detail}/> */}
      </div>
    )
  }
}
