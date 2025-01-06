// import { StrictMode } from 'react'
import {BrowserRouter , Route ,Routes} from "react-router-dom"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from '../components/admin/Login.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />}>
      </Route>
    </Routes>
  </BrowserRouter>
)
