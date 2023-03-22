/*
 * @Date: 2023-03-21 15:15:41
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store'
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
// 因为redux里面状态改变不会更新页面视图，所以注册一个监听器
store.subscribe(() => {
  root.render(<App />);
})

// reportWebVitals();
