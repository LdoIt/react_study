/*
 * @Date: 2023-03-23 13:30:14
 */
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {nanoid} from 'nanoid'
import {createAddPersonAction} from '../../redux/actions/person.js'
class Person extends Component {
  addPerson = () => {
    const {value: name} = this.nameNode
    const {value: age} = this.ageNode
    this.props.addPerson({id: nanoid(), name, age})
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>我是Person组件,上方组件求和为：{this.props.count}</h2>
				<input ref={c=>this.nameNode = c} type="text" placeholder="输入名字"/>
				<input ref={c=>this.ageNode = c} type="text" placeholder="输入年龄"/>
				<button onClick={this.addPerson}>添加</button>
				<ul>
					{
            this.props.person.map(perObj => {
              return <li key={perObj.id}>{perObj.name}&nbsp;&nbsp;{perObj.age}</li>
            })
          }
				</ul>
      </div>
    )
  }
}

export default connect(state=> ({person: state.person, count: state.count}), {
  addPerson: createAddPersonAction
})(Person)