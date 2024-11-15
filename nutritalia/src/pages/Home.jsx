import React from 'react';
import '../css/Home.css';
import imagen1 from '../images/SpaguetiBologesa.png'
import imagen2 from '../images/PastaCremosa.png'
import imagen3 from '../images/PastaCItaliana.png'
import logo from '../images/logoLetra.png'; 


function Home() {
  return (
    <div className="home">
      {/* Sección de portada con imagen de fondo */}
      <section className="hero-section">
        <h1>Bienvenido a Nutritalia</h1>
      </section>

    <br/>
    <br/>
    <br/>
    <br/>
      <div className="line"></div>
    <br/>
    <br/>
      <section className="seasonal-specials-section">
    
        <h2>~ ESPECIALES DE TEMPORADA ~</h2>
      </section>

         {/* Sección de Imágenes */}
         <section className="image-gallery">
        <img src={imagen1} alt="Especialidad 1" className="gallery-image" />
        <img src={imagen2}  alt="Especialidad 2" className="gallery-image" />
        <img src={imagen3}  alt="Especialidad 3" className="gallery-image" />
      </section>

      <br/>
      <br/>
      <br/>

      <div className="navbar-logo">
        <img src={logo} alt="Logo de Nutritalia" />
      </div>

      {/* Segunda sección con color de fondo */}
      <section className="content-section">
        <p>Contenido adicional aquí...</p>
      </section>
      <div className="line"></div>
    </div>
  );
}

export default Home;
