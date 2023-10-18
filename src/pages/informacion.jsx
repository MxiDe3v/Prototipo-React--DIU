import React from 'react'
import { Button } from '@mui/material'

import NavBar from '../components/nav_bar'
import LogoUSM from '../assets/usm.png'

export const PaginaDeInfo = () => {
  return (
    <div className='page'>
      <h1 className='page__title'>Reciclaje Inteligente</h1>
      <NavBar />
      <h2>Información</h2>
      <img src={LogoUSM} height={100} alt='logo usm' /><br />
      <Button variant='contained'>Material UI Button</Button>
    </div>
  )
}

export default PaginaDeInfo
