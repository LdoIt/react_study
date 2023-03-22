// 初始化preState的值
const initState = 0
export default function countReduer(preState=initState, action) {
  const {type, data} = action
  switch (type) {
    case 'increment':
      console.log(preState);
      return preState + data
    case 'decrement':
      return preState - data    
    default:
      return initState;
  }
}