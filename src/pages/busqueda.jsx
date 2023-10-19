import React from 'react'
import { Button } from '@mui/material'
import NavBar from '../components/nav_bar'
import LogoUSM from '../assets/usm.png'
import LogoApp from '../assets/Illustration.png'
import Footer from '../components/footer'

export const PaginaDeBusqueda = () => {
  return (
    <div className='page'>
        <a href='/'>
          <img src={LogoApp} height={120} alt='logo app' /><br />
        </a>
        <NavBar />
        <h2>Se encontraron 4 resultados por tu busqueda en Santiago Centro</h2>
        <img src={LogoUSM} height={100} alt='logo usm' /><br />
        <Button variant='contained'>Material UI Button</Button>
        <Footer />
    </div>
  )
}

export default PaginaDeBusqueda
