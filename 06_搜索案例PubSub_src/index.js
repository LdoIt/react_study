/*
 * @Date: 2023-03-19 11:14:13
 */
import React from 'react'
import * as reactDomClient from 'react-dom/client'
import App from './App'
const root = reactDomClient.createRoot(document.getElementById('root'))
root.render(<React.StrictMode><App/></React.StrictMode>)
