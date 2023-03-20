import React from 'react'
import reactDomClient from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
const root = reactDomClient.createRoot(document.getElementById('root'))
root.render(<BrowserRouter><App/></BrowserRouter>)