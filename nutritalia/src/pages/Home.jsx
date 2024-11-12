import React from 'react';
import '../css/Home.css';

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

      {/* Segunda sección con color de fondo */}
      <section className="content-section">
        <p>Contenido adicional aquí...</p>
      </section>
    </div>
  );
}

export default Home;
