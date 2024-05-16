import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import PlayerContextprovider from './context/PlayerContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <PlayerContextprovider>
      <App />

    </PlayerContextprovider>
    </BrowserRouter>
  </React.StrictMode>,
)
