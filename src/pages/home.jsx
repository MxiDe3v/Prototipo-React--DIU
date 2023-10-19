import React from 'react'

import NavBar from '../components/nav_bar'
import LogoApp from '../assets/Illustration.png'
import Recycle from '../assets/recycle.jpg'
import Asynchronous from '../components/search_bar';
import Footer from '../components/footer'
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';


export const HomePage = () => {
  return (
    <div className='page'>
      <a href='/'>
          <img src={LogoApp} height={120} alt='logo app' /><br />
      </a>
      <NavBar />
      <div className='container'>
        <Asynchronous />
        <Button href='/busqueda'>
          <SearchIcon  />
        </Button>
      </div>
      <div className='recycle'>
        <img className='recycle_image' src={Recycle} height={160} alt='recycle image' />
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
