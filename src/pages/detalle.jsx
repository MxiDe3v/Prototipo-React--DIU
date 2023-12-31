import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import NavBar from '../components/nav_bar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'
import { faMap } from '@fortawesome/free-regular-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import Footer from '../components/footer'

export const Detalle = () => {
  let { src, titulo, descripcion, url } = useParams()
  let strArray = descripcion.split("Horarios: ")

  const [isFavorite, setIsFavorite] = useState(false)

  const handleClick = () => {
    setIsFavorite(!isFavorite)
  }
  return (
    <div className='page'>
      <NavBar />

      {/* Titulo de resultado y boton para favoritos */}
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px 0px'}}>
        <a href='/resultado' style={{color: '#217c61', marginLeft: '-25rem', marginRight: '45rem', position: 'absolute', fontSize: '14pt', textDecoration: 'underline'}}>Volver</a>
        <h2 style={{textAlign: 'center', fontWeight: 'bold'}}>{titulo}</h2>
        <Button onClick={handleClick} variant={isFavorite ? 'primary' : 'secondary'} style={{
          height: '50px',
          width: '50px',
          borderRadius: '50%',
          backgroundColor: '#fff',
          color: 'white',
          border: 'none',
          textAlign: 'center',
          display: 'block',
          marginLeft: '20px' }}>
          <FontAwesomeIcon icon={isFavorite ? fasHeart : farHeart} color={isFavorite ? 'red' : 'grey'} size='2x'/>
        </Button>
      </div>
      {/* Titulo de resultado y boton para favoritos */}

      {/* Informacion de resultado */}
      <div style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
        <img src={src} style={{ width: '60%', height: 'auto', marginLeft: '100px', padding: '20px'}} alt={titulo} />
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <p style={{width: '60%', height: 'auto', marginLeft:'0px'}}> <FontAwesomeIcon icon={faCircleInfo}/> {strArray[0]}</p>
          <p style={{width: '60%', height: 'auto', marginLeft:'0px'}}> <FontAwesomeIcon icon={faClock}/> {strArray[1]}</p>
          <a href={url} target='_blank' rel='noopener noreferrer' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <p style={{width: '100%', height: 'auto', backgroundColor: '#94c132', padding: '20px', borderRadius: '25px', color: '#112a26', fontWeight: 'bold'}}> <FontAwesomeIcon icon={faMap}/>  Cómo llegar</p>
          </a>
        </div>
      </div>
      {/* Informacion de resultado */}

      <Footer />
    </div>
  )
}

export default Detalle
