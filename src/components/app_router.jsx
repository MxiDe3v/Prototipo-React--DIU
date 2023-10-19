import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import PaginaDeResultado from '../pages/resultado'
import PaginaDeFavoritos from '../pages/favorito'
import PaginaDeInfo from '../pages/informacion'
import Detalle from '../pages/detalle'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/resultado' element={<PaginaDeResultado />} />
        <Route path='/favoritos' element={<PaginaDeFavoritos />}/>
        <Route path='/informacion' element={<PaginaDeInfo />} />
        <Route path='/detalle/:src/:titulo/:descripcion/:url' element={<Detalle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
