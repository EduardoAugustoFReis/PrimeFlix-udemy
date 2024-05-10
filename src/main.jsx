import React from 'react'
import ReactDOM from 'react-dom/client'

import Global from './styles/global';
import { AppRoutes } from './routes/app.routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global/>
    <AppRoutes/>
  </React.StrictMode>,
)
