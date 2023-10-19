import React from 'react'
import NavBar from '../components/nav_bar'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRoute } from '@fortawesome/free-solid-svg-icons'

export const PaginaDeResultado = () => {
  return (
    <div className='page'>
      <h1 className='page__title'>Reciclaje Inteligente</h1>
      <NavBar />
      <h2>Resultados</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {Contenedor({src:"https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=4tbWhmLSSrNXLdUJguywog&cb_client=search.gws-prod.gps&w=408&h=240&yaw=354.22885&pitch=0&thumbfov=100"}, 
        'Santo Domingo con Teatinos, Santiago Centro', 
        '¿Que se puede reciclar aqui?: Vidrio, envases tetra pak, botellas plásticas peta, cartón, diario, papeles blancos, revistas y bolsas plásticas. Horarios: Lunes a Domingo (08 AM a 21 PM)', 
        {src:'https://goo.gl/maps/4Fr2ME6Vzv2P3XoK7'})}
        {Contenedor({src:"https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=B7U1a2xzT0Hpcj0hHB4EAw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=105.56946&pitch=0&thumbfov=100"}, 
        'Av. República 440, Santiago Centro', 
        '¿Qué se puede reciclar aquí?: vidrio, papel, cartón, cartón para bebida, plástico y metal. Horarios: Lunes a Viernes (09 AM a 17 PM) / (Sábado 09 AM a 14:30 PM) / Domingos y festivos cerrado', 
        {src:'https://goo.gl/maps/psNFYeb6bdVbT2mr9'})}
        {Contenedor({src:"https://lh5.googleusercontent.com/p/AF1QipPRZo5-B3OXQGflSLDMriZ1grtSxBF2UoFbkaYU=w426-h240-k-no"}, 
        'Interior Parque de los Reyes (Avda. Presidente Balmaceda), Santiago Centro', 
        '¿Qué se puede reciclar aquí?: plástico, vidrio, papel y cartón. Horarios: Lunes a Viernes (09 AM a 17:30 PM) / Sábado (09 AM a 14:30 PM) / Domingos y festivos cerrado', 
        {src:'https://goo.gl/maps/ZArzduuhoYLKjoYx6'})}
        {Contenedor({src:"https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=KvEl-Kjboj_nkDP9S6ve0Q&cb_client=search.gws-prod.gps&w=408&h=240&yaw=11.171399&pitch=0&thumbfov=100"}, 
        'Calle Tupper 1999, Santiago Centro', 
        '¿Qué se puede reciclar aquí?: cartón corrugado, cartón dúplex, diarios, revistas, tetra pak, papel blanco, latas, botellas PET y latas de conserva. Horarios: Lunes a Sábado (09 AM a 18 PM) / Domingos y festivos cerrado', 
        {src:'https://goo.gl/maps/MNqSncGJgrUHjdbg8'})}
      </div>
    </div>
  )
}

function Contenedor(prop, title, description, url){
  const param = "parametros_magicos_para_despues"
  return(
    <div style={{ width: '30%', margin: '1em' }}>
      <Link to={`/detalle/${encodeURIComponent(prop.src)}/${encodeURIComponent(title)}/${encodeURIComponent(description)}/ ${encodeURIComponent(url.src)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div style={{ backgroundColor: '#333', padding: '1em', color: '#fff', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', display: 'flex' }}>
          <img src={prop.src} style={{ width: '60%', height: 'auto' }} alt=""/>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <FontAwesomeIcon icon={faRoute}/>
            <p style={{width: '60%', height: 'auto', marginLeft:'10px', fontSize: '12px'}}>{title}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PaginaDeResultado
