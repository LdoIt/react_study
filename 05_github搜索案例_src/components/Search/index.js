/*
 * @Date: 2023-03-19 11:30:34
 */
import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {
  search = () => {
    const {getInfoFromSearch} = this.props
    getInfoFromSearch({isFirst: false, loading: true})
    let {inputEle: {value:keyWord}} = this
    axios.get(`/api1/search/users222?q=${keyWord}`).then(
      (response) => {
        getInfoFromSearch({isFirst: false, loading: false, avatars: response.data.items})
      },
      (err) => {
        getInfoFromSearch({loading: false, error: err.message})
      },
    )
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={(c) => this.inputEle = c} type="text" placeholder="enter the name you search" />
          &nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
