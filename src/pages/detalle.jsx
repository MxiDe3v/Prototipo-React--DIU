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

export const Detalle = () => {
  let { src, titulo, descripcion, url } = useParams()
  let strArray = descripcion.split("Horarios: ")

  const [isFavorite, setIsFavorite] = useState(false)

  const handleClick = () => {
    setIsFavorite(!isFavorite)
  }
  return (
    <div className='page'>
      <h1 className='page__title'>Reciclaje Inteligente</h1>
      <NavBar />
      <div style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
        <h2>{titulo}</h2>
        <Button onClick={handleClick} variant={isFavorite ? 'primary' : 'secondary'} style={{
          height: '50px',
          width: '50px',
          borderRadius: '50%',
          backgroundColor: '#fff',
          color: 'white',
          border: 'none',
          textAlign: 'center',
          display: 'block',
          marginLeft: '20px'
        }}>
          <FontAwesomeIcon icon={isFavorite ? fasHeart : farHeart} color={isFavorite ? 'red' : 'grey'} size='2x'/>
        </Button>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <img src={src} style={{ width: '60%', height: 'auto'}} alt={titulo} />
      </div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <FontAwesomeIcon icon={faCircleInfo}/>
        <p style={{width: '60%', height: 'auto', marginLeft:'10px'}}>{strArray[0]}</p>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <FontAwesomeIcon icon={faClock}/>
        <p style={{width: '60%', height: 'auto', marginLeft:'10px'}}>{strArray[1]}</p>
      </div>
      <a href={url} target='_blank' rel='noopener noreferrer' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <FontAwesomeIcon icon={faMap}/>
        <p style={{width: '60%', height: 'auto', marginLeft: '10px'}}>Como llegar</p>
      </a>
    </div>
  )
}

export default Detalle
