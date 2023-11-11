import React, { useState, useEffect } from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';
import NavBar from '../components/nav_bar';
import PruebaImagen from '../assets/favorito_test.jpg'
import Logo from "../assets/logo.png"
import Footer from '../components/footer'
import ClipLoader from "react-spinners/ClipLoader";

export const PaginaDeFavoritos = () => {

  const [contenedoresFavoritos, setContenedoresFavoritos] = useState([]);

  const paperStyle = {
    padding: '16px',
    textAlign: 'left',
    color: '#000',
    marginLeft: '100px',
    marginRight: '100px',
    marginTop: '10px',
    marginBottom: '10px',
    backgroundColor: '#336b05'
  };

  const agregarContenedorTemporal = () => {
    // Aquí puedes agregar la lógica para añadir un contenedor a la lista de favoritos
    // Simularemos esto añadiendo un contenedor de prueba
    const contenedorPrueba = {
      nombre: 'Contenedor de Santo Domingo & Teatinos',
      lugar: 'Santo domingo con Teatinos Santiago centro',
      disponibilidad: 'Disponible',
      tipo: 'Rojo',
      imagenSrc: PruebaImagen, // Añade la URL de la imagen de prueba
    };

    setContenedoresFavoritos([...contenedoresFavoritos, contenedorPrueba]);
  };

  // Intente hacer un loading pero no funciona xd
  const [loading, setLoading] = useState(false)
  useEffect(() => {
	setLoading(true)
    setTimeout(() => {
    setLoading(false)
		}, 3000);
	}, [])

  return (
    <div className='page'>
      <a href='/'>
          <img src={Logo} height={120} alt='logo app' /><br />
      </a>
      <NavBar />

      <div style={{ textAlign: 'center', color:'#217c61', fontWeight: 'bold'}}>
        <h2>Favoritos</h2>
      </div>

      <div style={{textAlign: 'center', marginTop: '10px'}}>
        <Button style={{backgroundColor: '#336b05'}} variant='contained' onClick={agregarContenedorTemporal} >
          Agregar Favorito Temporal
        </Button>
      </div>

      {/* Mostrar contenedores favoritos */}
      {contenedoresFavoritos.map((contenedor, index) => (
        <Paper key={index} style={paperStyle}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <img
                src={contenedor.imagenSrc}
                alt={`Contenedor de ${contenedor.nombre}`}
                style={{ maxWidth: '50%', height: 'auto', marginLeft: '25%' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" style={{color: '#dde6a1', fontSize: '30px', fontWeight: 'bold'}}>{contenedor.nombre}</Typography>
              <Typography variant="body1" style={{color: '#dde6a1'}}>Lugar: {contenedor.lugar}</Typography>
              <Typography variant="body1" style={{color: '#dde6a1'}}>Estado: {contenedor.disponibilidad}</Typography>
              <Typography variant="body1" style={{color: '#dde6a1'}}>Tipo de contenedor: {contenedor.tipo}</Typography>
            </Grid>
          </Grid>
        </Paper>
      ))}
    <Footer />
    </div>
  );
}

export default PaginaDeFavoritos
