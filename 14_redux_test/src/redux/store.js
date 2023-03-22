/*
 * @Date: 2023-03-22 16:26:19
 */
// 该文件专门用于暴露store对象，整个应用只有一个store对象
import { createStore } from 'redux'
// 引入为Count组件服务的reducer
import countReduer from './count_reduer'
export default createStore(countReduer)