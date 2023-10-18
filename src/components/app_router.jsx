import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import PaginaDeInfo from '../pages/informacion'
import PaginaDeFavoritos from '../pages/favorito'
import PaginaDeXXX from '../pages/xxx'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/XXX' element={<PaginaDeXXX />} />
        <Route path='/favoritos' element={<PaginaDeFavoritos />} />
        <Route path='/informacion' element={<PaginaDeInfo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
