import React from 'react'
import ReactDOM from 'react-dom/client'

// react router 
import { BrowserRouter } from 'react-router-dom'

// redux toolkit configuration
import { Provider } from 'react-redux'
import { store } from './store/store.js'

// app
import App from './App.jsx'

// css 
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
