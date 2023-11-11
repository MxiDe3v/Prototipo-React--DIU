import React from 'react'
import { Grid, Paper, Typography } from '@mui/material';
import NavBar from '../components/nav_bar'
import ContenedorAzulImagen from '../assets/contenedor_azul.png';
import ContenedorAmarilloImagen from '../assets/contenedor_amarillo.png';
import ContenedorVerdeImagen from '../assets/contenedor_verde.png';
import ContenedorGrisImagen from '../assets/contenedor_gris.png';
import ContenedorRojoImagen from '../assets/contenedor_rojo.png';
import ContenedorNaranjoImagen from '../assets/contenedor_naranjo.png';
import Logo from "../assets/logo.png"
import Footer from '../components/footer'

const ContenedorInfo = ({ titulo, contenido, imagenSrc }) => {
  // Estilos en línea para los elementos
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 -1000px',
    backgroundColor: '#336b05',
  };

  const paperStyle = {
    backgroundColor: '#DDE6A1',
    textAlign: 'left',
    color: '#112a26', // Cambia el color del texto según tus preferencias
    marginLeft: '100px',
    marginRight: '100px',
    marginTop: '30px',
    marginBottom: '15px',
  };

  const imageStyle = {
    maxWidth: '18%',
    height: 'auto',
  };

  const textContainerStyle = {
    flex: 1,  // El texto ocupa el espacio restante
    marginLeft: '-250px',
    textAlign: 'justify',
    color: '#dde6a1',
    padding: '1.5rem'
  };

  return (
    <Paper style={paperStyle}>
      <Grid container spacing={0} style={containerStyle}>
        <Grid item xs={12} md={6}>
          <img src={imagenSrc} alt={`Contenedor de ${titulo}`} style={imageStyle} />
        </Grid>
        <Grid item xs={12} md={6} style={textContainerStyle}>
          <Typography variant="h4" style={{fontWeight: 'bold'}}>{titulo}</Typography>
          <Typography variant="body1">{contenido}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export const PaginaDeInfo = () => {
  return (
    <div className='page'>
      <a href='/'>
          <img src={Logo} height={120} alt='logo app' /><br />
      </a>
      <NavBar />
      
      <ContenedorInfo
        titulo="Contenedor Azul"
        contenido="Destinados a papel y cartón. Es importante que estos materiales estén limpios y plegados para facilitar el proceso de reciclaje. 
        
        Pasos para el Reciclaje:
        Asegúrate de que el papel y el cartón estén libres de contaminantes como alimentos o productos químicos.
        Pliega los cartones y recortes de papel para ahorrar espacio en el contenedor.
        Evita desechar papeles encerados, papel higiénico o papel de aluminio en este contenedor."
        imagenSrc={ContenedorAzulImagen}
      />

      <ContenedorInfo
        titulo="Contenedor Verde"
        contenido="Destinados para el vidrio. Este material debe estar enjuagado y seco antes de depositarlo en el contenedor. 

        Pasos para el Reciclaje:
        Enjuaga bien los envases de vidrio para eliminar residuos.
        Retira las tapas y etiquetas de los envases antes de reciclar.
        No incluyas vidrio plano, cerámica o cristal en este contenedor."
        imagenSrc={ContenedorVerdeImagen}
      />

      <ContenedorInfo
        titulo="Contenedor Rojo"
        contenido="Destinados a residuos peligrosos como baterías, pilas, aceites o medicamentos. Estos materiales deben ser gestionados con cuidado debido a sus características peligrosas. 
        
        Pasos para el Reciclaje:
        Almacenar baterías y pilas en contenedores específicos para su reciclaje.
        Devolver medicamentos no utilizados a las farmacias para su eliminación segura.
        Reciclar aceites a través de programas municipales o centros de reciclaje designados."
        imagenSrc={ContenedorRojoImagen}
      />

      <ContenedorInfo
        titulo="Contenedor Amarillo"
        contenido="Destinados a plásticos. Estos deben estar enjuagados y secos antes de depositarlos en el contenedor. 
        
        Pasos para el Reciclaje: 
        Lava y enjuaga los envases plásticos para eliminar cualquier residuo.
        Separa los tapones y las etiquetas de los envases antes de reciclar.
        Evita desechar plásticos no reciclables, como juguetes o utensilios de cocina."
        imagenSrc={ContenedorAmarilloImagen}
      />

      <ContenedorInfo
        titulo="Contenedor Gris"
        contenido="Destinados a metales. Estos deben estar enjuagados sin residuos y secos. 
        
        Pasos para el Reciclaje:
        Asegúrate de que los envases metálicos estén limpios y libres de alimentos.
        Separa los diferentes tipos de metales, como aluminio y acero, para facilitar el reciclaje.
        Evita desechar objetos metálicos grandes o contaminados con productos químicos."
        imagenSrc={ContenedorGrisImagen}
      />

      <ContenedorInfo
        titulo="Contenedor Naranjo"
        contenido="Destinado a restos de alimentos como pieles de frutas, espinas de pescado, plantas, cáscaras de huevo o posos.
        
        Pasos para el Reciclaje:
        Separa los restos de alimentos de otros desechos no compostables.
        No incluyas plásticos, papeles o materiales no orgánicos en este contenedor.
        Utiliza el compost producido en jardines o para fertilizar plantas."
        imagenSrc={ContenedorNaranjoImagen}
      />
    <Footer/>
    </div>
  )
}

export default PaginaDeInfo
