/*
 * @Date: 2023-03-19 11:32:13
 */
import React, { Component } from 'react'
import './index.css'
export default class List extends Component {
  render() {
    const { isFirst,loading, error, avatars } = this.props
    return (
      <div className="row">
        {isFirst ? <h2>search to show the users</h2> :
        loading ? <h2>loading</h2> :
        error ? <h2>{error}，出错了</h2> :
          avatars.map(item => {
            return (
              <div className="card" key={item.id}>
                <a href={item.html_url} target="_blank" rel="noreferrer">
                  <img alt="avater" src={item.avatar_url} style={{ width: '100px' }} />
                </a>
                <p className="card-text">{item.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
