/*
 * @Date: 2023-03-23 13:47:41
 */
import {ADD_PERSON} from '../constant'
// 这里的data是一个person对象
export const createAddPersonAction = (data) => ({type: ADD_PERSON, data})