import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { ProvedorAutenticacao } from "./contexts/AuthContext";

import './globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

<ProvedorAutenticacao>
<RouterProvider router={router} />
</ProvedorAutenticacao>

  </React.StrictMode>
)

