/*
 * @Date: 2023-03-20 20:39:54
 */
import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
class Header extends Component {
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
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router Demo</h2>
            <button onClick={() => this.back()}>goBack</button><button onClick={() => this.goto()}>go</button>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
