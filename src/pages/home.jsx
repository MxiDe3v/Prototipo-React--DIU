import React from 'react'

import NavBar from '../components/nav_bar'
import LogoApp from '../assets/Illustration.png'
import Asynchronous from '../components/search_bar';
import SearchIcon from '@mui/icons-material/Search';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';

export const HomePage = () => {
  return (
    <div className='page'>
      <a href='/'>
          <img src={LogoApp} height={120} alt='logo app' /><br />
      </a>
      <NavBar />
      <div className='container'>
        <Asynchronous />
        <Button href="#">
          <SearchIcon />
        </Button>
      </div>
    </div>
  )
}

export default HomePage
