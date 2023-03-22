import {INCREMENT, DECREMENT} from './constant'
// 注意该箭头函数的写法return了一个对象要用() 包起来，否则对象形式的{}会被认为是函数体的{}
export const createIncrementAction = data => ({type: INCREMENT, data})
export const createDecrementAction = data => ({type: DECREMENT, data})
export const createAsyncAction = (data, time) => {
  // 异步action里面返回的函数参数默认是store.dispatch
  return (dispatch) => {
    setTimeout(() => {
      dispatch({type: INCREMENT, data})
    }, time)
  }
}