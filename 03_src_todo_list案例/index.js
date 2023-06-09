/*
 * @Date: 2023-03-18 10:56:24
 */
import React from 'react'
import * as ReactDOMClient from 'react-dom/client';
import App from './App'
// 将app渲染在root节点上
const root = ReactDOMClient.createRoot(document.getElementById('root'))
root.render(<React.StrictMode><App/></React.StrictMode>)