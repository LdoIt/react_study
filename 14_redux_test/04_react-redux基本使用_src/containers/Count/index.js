// 引入CountUI组件
import CountUI from '../../components/Count'
// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux'
// 引入创建action的函数
import {createIncrementAction, createDecrementAction, createAsyncAction} from '../../redux/count_action'
// mapStateToProps返回一个对象，因为子组件要通过props接收，该函数用于传递状态
function mapStateToProps(state) {
  return {count: state}
}
// mapDispatchToProps返回一个对象传递给UI组件，用于操作状态
function mapDispatchToProps(dispatch) {
  return {
    increment: (data) => dispatch(createIncrementAction(data)),
    decrement: (data) => dispatch(createDecrementAction(data)),
    asyncIncrement: (data) => dispatch(createAsyncAction(data, 500)),
  }
}
// 创建并暴露Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
