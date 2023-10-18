import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import PaginaDeInfo from '../pages/informacion'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/informacion' element={<PaginaDeInfo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
