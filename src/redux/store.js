/*
 * @Date: 2023-03-22 16:26:19
 */
// 该文件专门用于暴露store对象，整个应用只有一个store对象
import { createStore, applyMiddleware, combineReducers } from 'redux'
// 引入为Count组件服务的reducer
import countReduer from './reducers/count'
// 引入为Person组件服务的reducer
import personReduer from './reducers/person'
// 引入 redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
// 汇总所有reducer用combineReducers方法，该参数值就是redux里面的状态
const allReducer = combineReducers({
  count: countReduer,
  person: personReduer
})
// redux-thunk 配置到store中
export default createStore(allReducer, applyMiddleware(thunk))