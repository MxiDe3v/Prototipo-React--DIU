import React, { useState } from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';
import NavBar from '../components/nav_bar';
import PruebaImagen from '../assets/prueba.png'

export const PaginaDeFavoritos = () => {

  const [contenedoresFavoritos, setContenedoresFavoritos] = useState([]);

  const paperStyle = {
    padding: '16px',
    textAlign: 'left',
    color: '#000',
    marginLeft: '10px',
    marginRight: '10px',
    marginTop: '10px',
    marginBottom: '10px'
  };

  const agregarContenedorTemporal = () => {
    // Aquí puedes agregar la lógica para añadir un contenedor a la lista de favoritos
    // Simularemos esto añadiendo un contenedor de prueba
    const contenedorPrueba = {
      nombre: 'Contenedor de Prueba',
      lugar: 'Ubicación de Prueba',
      disponibilidad: 'Disponible',
      imagenSrc: PruebaImagen, // Añade la URL de la imagen de prueba
    };

    setContenedoresFavoritos([...contenedoresFavoritos, contenedorPrueba]);
  };

  return (
    <div className='page'>
      <h1 className='page__title'>Reciclaje Inteligente</h1>
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
            </Grid>
          </Grid>
        </Paper>
      ))}
    </div>
  );
}

export default PaginaDeFavoritos
