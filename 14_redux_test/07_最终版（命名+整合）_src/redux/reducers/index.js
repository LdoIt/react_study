// 该文件专门用来暴露合并后的reducers
import {combineReducers} from 'redux'
// 引入为Count组件服务的reducer
import count from './count'
// 引入为Person组件服务的reducer
import person from './person'
// 汇总所有reducer用combineReducers方法，该参数值就是redux里面的状态
export default combineReducers({
  count,
  person
})
// export default {reducers: {count,person}}