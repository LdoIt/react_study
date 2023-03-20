/*
 * @Date: 2023-03-20 12:18:08
 */
import React from 'react'
import reactDomClient from 'react-dom/client'
import {BrowserRouter, HashRouter} from 'react-router-dom'
import App from './App'
const root = reactDomClient.createRoot(document.getElementById('root'))
root.render(<HashRouter><App/></HashRouter>)