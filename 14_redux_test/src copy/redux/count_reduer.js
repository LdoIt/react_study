import {INCREMENT, DECREMENT} from './constant'
// 初始化preState的值
const initState = 0
export default function countReduer(preState=initState, action) {
  const {type, data} = action
  switch (type) {
    case INCREMENT:
      return preState + data
    case DECREMENT:
      return preState - data    
    default:
      return initState;
  }
}