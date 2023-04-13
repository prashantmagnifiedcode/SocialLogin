import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import GlobalContext from './Redux copy/Global/GlobalContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContext>

    <App />
    </GlobalContext>
  </React.StrictMode>,
)
