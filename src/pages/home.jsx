import React from 'react'
import NavBar from '../components/nav_bar'
import Recycle from '../assets/recycle.jpg'
import Icons8 from '../assets/recycle_icon.png'
import Asynchronous from '../components/search_bar';
import Footer from '../components/footer'
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';


export const HomePage = () => {
  return (
    <div className='page'>

      <NavBar />

      {/* Contenedor del buscador */}
      <div className='container' >
        <Asynchronous />
        <Button href='/resultado'>
          <SearchIcon  />
        </Button>
      </div>
      {/* Contenedor del buscador */}

      {/* Contenedor del cuerpo home */}
      <div className='recycle' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '2rem', marginTop: '1.5rem'}}>
        <img className='recycle_image' src={Recycle} height={160} alt='recycle image' />
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginLeft: '2rem'}}>
          <h2 style={{marginLeft: '0rem'}}>¿Sabías que ... ?</h2>
          <ul style={{listStyle: 'none', textAlign: 'justify', marginTop: '-0.2rem'}}>
            <li> <img src={Icons8} alt='icon-recycle' height={25}/> El reciclaje a nivel mundial contribuye <br></br> significativamente al ahorro de energía.</li>
            <br></br>
            <li> <img src={Icons8} alt='icon-recycle' height={25}/> El reciclaje impulsa la transición hacia <br></br> una economía circular.</li>
            <br></br>
            <li> <img src={Icons8} alt='icon-recycle' height={25}/> El reciclaje en Chile desempeña un papel <br></br> crucial en la conservación de los recursos naturales.</li>
          </ul>
        </div>
      </div>
      {/* Contenedor del cuerpo home */}

      <Footer />
    </div>
  )
}

export default HomePage
