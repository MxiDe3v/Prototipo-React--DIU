import React, { useState } from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';
import NavBar from '../components/nav_bar';
import PruebaImagen from '../assets/favorito_test.jpg'
import Logo from "../assets/logo.png"

export const PaginaDeFavoritos = () => {

  const [contenedoresFavoritos, setContenedoresFavoritos] = useState([]);

  const paperStyle = {
    padding: '16px',
    textAlign: 'left',
    color: '#000',
    marginLeft: '100px',
    marginRight: '100px',
    marginTop: '10px',
    marginBottom: '10px'
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

  return (
    <div className='page'>
      <img src={Logo} style={{ maxWidth: '20%', height: 'auto' }} />
      <NavBar />
      <div style={{ textAlign: 'center' }}>
        <h2>Favoritos</h2>
      </div>

      <div style={{textAlign: 'center', marginTop: '10px'}}>
        <Button variant='contained' onClick={agregarContenedorTemporal} >
          Agregar Contenedor Temporal
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
                style={{ maxWidth: '20%', height: 'auto' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4">{contenedor.nombre}</Typography>
              <Typography variant="body1">Lugar: {contenedor.lugar}</Typography>
              <Typography variant="body1">Disponibilidad: {contenedor.disponibilidad}</Typography>
              <Typography variant="body1">Tipo de contenedor: {contenedor.tipo}</Typography>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </div>
  );
}

export default PaginaDeFavoritos
