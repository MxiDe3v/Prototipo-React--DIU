import React from 'react'
import { Grid, Paper, Typography } from '@mui/material';
import NavBar from '../components/nav_bar'
import ContenedorAzulImagen from '../assets/contenedor_azul.png';
import ContenedorAmarilloImagen from '../assets/contenedor_amarillo.png';
import ContenedorVerdeImagen from '../assets/contenedor_verde.png';
import ContenedorGrisImagen from '../assets/contenedor_gris.png';
import ContenedorRojoImagen from '../assets/contenedor_rojo.png';
import ContenedorNaranjoImagen from '../assets/contenedor_naranjo.png';
import Footer from '../components/footer'

const ContenedorInfo = ({ titulo, contenido, imagenSrc }) => {
  // Estilos en línea para los elementos
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 -1000px',
    backgroundColor: '#336b05',
    borderRadius: '30px',
    border: '1px solid #112a26'
  };

  const paperStyle = {
    backgroundColor: '#FBFFE2',
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

  const elementosContenido = contenido.split('\n');

  return (
    <Paper style={paperStyle}>
      <Grid container spacing={0} style={containerStyle}>
        <Grid item xs={12} md={6}>
          <img src={imagenSrc} alt={`Contenedor de ${titulo}`} style={imageStyle} />
        </Grid>
        <Grid item xs={12} md={6} style={textContainerStyle}>
          <Typography variant="h4" style={{fontWeight: 'bold'}}>{titulo}</Typography>
          <ul>
            {elementosContenido.map((elemento, index) => 
              <li key={index}>
                <Typography variant="body1">{elemento}</Typography>
              </li>
            )}
          </ul>
        </Grid>
      </Grid>
    </Paper>
  );
};

export const PaginaDeInfo = () => {
  return (
    <div className='page'>
      <NavBar />
      
      <ContenedorInfo
        titulo="Contenedor Azul"
        contenido={`Contenedores azules para papel y cartón.\nAsegúrate de que estén limpios y plegados para facilitar el reciclaje.\nElimina contaminantes como alimentos y químicos.\nPliega cartones y papel para ahorrar espacio.\nNo incluyas papeles encerados, papel higiénico o papel de aluminio.`}
        imagenSrc={ContenedorAzulImagen}
      />

      <ContenedorInfo
        titulo="Contenedor Verde"
        contenido={`Contenedores verdes para vidrio.\nEnjuaga y seca el vidrio antes de depositarlo para eliminar residuos.\nRetira tapas y etiquetas antes de reciclar.\nNo incluyas vidrio plano, cerámica o cristal en este contenedor.`}
        imagenSrc={ContenedorVerdeImagen}
      />

      <ContenedorInfo
        titulo="Contenedor Rojo"
        contenido={`Contenedores rojos para residuos peligrosos como baterías, pilas, aceites o medicamentos.\nEstos materiales requieren gestión cuidadosa debido a sus características peligrosas.\nAlmacena baterías y pilas sin agujeros o deformidades.\nMantener medicamentos separados para evitar reacciones.\nRecicla aceites no quemados en contenedores específicos.`}
        imagenSrc={ContenedorRojoImagen}
      />

      <ContenedorInfo
        titulo="Contenedor Amarillo"
        contenido={`Contenedores amarillos para plásticos.\nLava y seca los envases plásticos antes de depositarlos para eliminar los residuos.\nSepara tapones y etiquetas antes de reciclar.\nEvita desechar plásticos no reciclables, como juguetes o utensilios de cocina.`}
        imagenSrc={ContenedorAmarilloImagen}
      />

      <ContenedorInfo
        titulo="Contenedor Gris"
        contenido={`Contenedores grises para metales.\nAsegúrate de que los envases metálicos estén limpios y libres de alimentos o residuos.\nSepara los diferentes tipos de metales, como aluminio y acero, para facilitar el reciclaje.\nEvita desechar objetos metálicos grandes o contaminados con productos químicos.`}
        imagenSrc={ContenedorGrisImagen}
      />

      <ContenedorInfo
        titulo="Contenedor Naranjo"
        contenido={`Contenedor para restos de alimentos destinados a compost.\nIncluye pieles de frutas, espinas de pescado, plantas, cáscaras de huevo y posos.\nEstos restos se utilizarán para hacer compost, un fertilizante y generador de energía.\nSepara los restos de alimentos de otros desechos no compostables.\nNo incluyas plásticos, papeles ni materiales no orgánicos en este contenedor.\nUtiliza el compost producido en jardines o para fertilizar plantas.`}
        imagenSrc={ContenedorNaranjoImagen}
      />
    <Footer/>
    </div>
  )
}

export default PaginaDeInfo
