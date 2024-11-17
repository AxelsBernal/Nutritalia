import React, { useState } from 'react';
import '../css/Home.css';
import imagen1 from '../images/SpaguetiBologesa.png'
import imagen2 from '../images/PastaCremosa.png'
import imagen3 from '../images/PastaCItaliana.png'
import imagen4 from '../images/Comida.jpg'
import logo from '../images/logoLetra.png'; 



function Home() {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (card) => {
    setActiveCard(activeCard === card ? null : card);
  };

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

      <div className="navbar-logo">
        <img src={logo} alt="Logo de Nutritalia" />
      </div>

      
      <br/>

      {/* Nueva sección de descripción */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-left">
            <h2>Somos un restaurante italiano</h2>
            <p>
              Somos un restaurante italiano creado por nutriólogos, dedicados a ofrecer platillos que combinan el auténtico con una alimentación saludable.
            </p>
            <p>
              Utilizamos ingredientes frescos y de alta calidad para que disfrutes de una experiencia deliciosa y nutritiva, cuidando de tu bienestar en cada bocado.
            </p>
            <p>
              ¡Ven y disfruta de un sabor italiano que también es bueno para ti!
            </p>
          </div>
          <div className="about-right">
            <img src={imagen4} alt="Plato italiano" />
          </div>
        </div>
      </section>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>


      {/* Sección Visión, Misión y Valores */}
      <section className="vision-mission-values">
        <div className="card" onClick={() => toggleCard('vision')}>
          <h3>VISIÓN</h3>
          {activeCard === 'vision' && (
            <p>
              Ser el restaurante líder en cocina italiana saludable, reconocido
              por combinar tradición y nutrición para un estilo de vida equilibrado.
            </p>
          )}
        </div>
        <div className="card" onClick={() => toggleCard('mission')}>
          <h3>MISIÓN</h3>
          {activeCard === 'mission' && (
            <p>
              Ofrecer comida italiana auténtica y nutritiva, promoviendo el bienestar a
              través de ingredientes frescos y platillos balanceados, sin comprometer el sabor.
            </p>
          )}
        </div>
        <div className="card" onClick={() => toggleCard('values')}>
          <h3>VALORES</h3>
          {activeCard === 'values' && (
            <ul>
              <li>Calidad</li>
              <li>Autenticidad</li>
              <li>Bienestar</li>
              <li>Compromiso</li>
              <li>Innovación</li>
            </ul>
          )}
        </div>
      </section>
      

      {/* Segunda sección con color de fondo 
      <section className="content-section">
        <p>Contenido adicional aquí...</p>
      </section> */}
      
      
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>

    
  );
}

export default Home;
