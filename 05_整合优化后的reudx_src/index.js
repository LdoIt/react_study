/*
 * @Date: 2023-03-21 15:15:41
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import store from './redux/store'
import App from './App';
// import store from './redux/store'
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// 引入Provider后会自动找页面中的容器组件并为其传store
root.render(<Provider store={store}><App/></Provider>);
// 因为redux里面状态改变不会更新页面视图，所以注册一个监听器，引入react-redux后容器组件会自动监听，不需要这写法了
// store.subscribe(() => {
//   root.render(<App />);
// })

// reportWebVitals();
