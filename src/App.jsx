import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Encabezado from './Components/Encabezado'
import Login from './Views/Public/Login'
import ProtectedRoutes from './Components/ProtectedRoutes'
import Pagina from './Views/Public/Pagina'
import Admin from './Views/Admin/Index'
import IndexServicios from './Views/Admin/Servicios/Index'
import CrearServicio from './Views/Admin/Servicios/Crear'
import EditarServicio from './Views/Admin/Servicios/Editar'
function App() {
  return (
    <BrowserRouter>
      <Encabezado />
      <Routes>
        <Route path="/" element={<Pagina />} />
        <Route path="/servicios" element={<IndexServicios />} />
        <Route path="/crear-servicio" element={<CrearServicio />} />
        <Route path="/editar-servicio/:id" element={<EditarServicio />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App