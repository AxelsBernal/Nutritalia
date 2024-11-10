import React from 'react';
import logo from '../images/Nutritalia.png';
import '../css/Home.css';

function Home() {
  return (
    <div className="home-container">
      <img src={logo} alt="Logo de Nutritalia" className="home-logo" />
    </div>
  );
}

export default Home;
