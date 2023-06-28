import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Encabezado from './Components/Encabezado'
import Pie from './Components/Pie'
import Login from './Views/Public/Login'
import ProtectedRoutes from './Components/ProtectedRoutes'
import Pagina from './Views/Public/Pagina'
import Admin from './Views/Admin/Index'
import IndexServicios from './Views/Admin/Servicios/Index'
import CrearServicio from './Views/Admin/Servicios/Crear'
import EditarServicio from './Views/Admin/Servicios/Editar'
import IndexTestimonios from './Views/Admin/Testimonios/Index'
import CrearTestimonios from './Views/Admin/Testimonios/Crear'
import EditarTestimonio from './Views/Admin/Testimonios/Editar'
import IndexBlog from './Views/Admin/Blog/Index'
import CrearBlog from './Views/Admin/Blog/Crear'
import EditarBlog from './Views/Admin/Blog/Editar'
import IndexReservaciones from './Views/Admin/Reservaciones/Index'
import CrearReservacion from './Views/Admin/Reservaciones/Crear'
import EditarReservacion from './Views/Admin/Reservaciones/Editar'
import IndexUsuarios from './Views/Admin/Usuarios/Index'
import CrearUsuario from './Views/Admin/Usuarios/Crear'
import EditarUsuario from './Views/Admin/Usuarios/Editar'
function App() {
  return (
    <BrowserRouter>
      <Encabezado />
      <Routes>
        <Route path="/" element={<Pagina />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/servicios" element={<IndexServicios />} />
          <Route path="/crear-servicio" element={<CrearServicio />} />
          <Route path="/editar-servicio/:id" element={<EditarServicio />} />
          <Route path="/testimonios" element={<IndexTestimonios />} />
          <Route path="/crear-testimonio" element={<CrearTestimonios />} />
          <Route path="/editar-testimonio/:id" element={<EditarTestimonio />} />
          <Route path="/blog" element={<IndexBlog />} />
          <Route path="/crear-blog" element={<CrearBlog />} />
          <Route path="/editar-blog/:id" element={<EditarBlog />} />
          <Route path="/reservaciones" element={<IndexReservaciones />} />
          <Route path="/crear-reservacion" element={<CrearReservacion />} />
          <Route path="/editar-reservacion/:id" element={<EditarReservacion />} />
          <Route path="/usuarios" element={<IndexUsuarios />} />
          <Route path="/crear-usuario" element={<CrearUsuario />} />
          <Route path="/editar-usuario/:id" element={<EditarUsuario />} />
        </Route>
      </Routes>
      <Pie />
    </BrowserRouter>
  )
}

export default App