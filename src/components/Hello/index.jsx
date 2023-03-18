/*
 * @Date: 2023-03-18 11:09:16
 */
import {Component} from 'react'
import hello from './index.module.css'
export default class Hello extends Component {
  render() {
    return <h3 className={hello.title}>你好，react</h3>
  }
}