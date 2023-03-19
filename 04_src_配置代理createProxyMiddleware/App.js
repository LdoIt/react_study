/*
 * @Date: 2023-03-19 09:23:20
 */
import React, { Component } from 'react'
import axios from 'axios'
export default class app extends Component {
  getStu = () => {
    axios.get('http://localhost:3000/api1/students').then(
      (response) => {console.log(response);},
      (err) => {console.log(err);}
    )
  }
  getCar = () => {
    axios.get('http://localhost:3000/api2/cars').then(
      (response) => {console.log(response);},
      (err) => {console.log(err);}
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.getStu}>点击获取学生数据</button>
        <button onClick={this.getCar}>点击获取汽车数据</button>
      </div>
    )
  }
}
