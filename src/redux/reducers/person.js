/*
 * @Date: 2023-03-23 13:44:18
 */
import {ADD_PERSON} from '../constant'
const initState = [{id: '001', name: '小明', age: '12'}]
export default function personReducer(preState=initState, action) {
  const {type, data} = action
  switch (type) {
    case ADD_PERSON:
      return [data, ...preState]
    default:
      return initState;
  }
}