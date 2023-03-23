/*
 * @Date: 2023-03-22 16:26:19
 */
// redux开发者工具
import {composeWithDevTools} from 'redux-devtools-extension'
// 该文件专门用于暴露store对象，整个应用只有一个store对象
import { createStore, applyMiddleware } from 'redux'
// import {configureStore} from '@reduxjs/toolkit'
// 引入所有的reducers
import reducers from './reducers'
// 引入 redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
// redux-thunk 配置到store中
export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))