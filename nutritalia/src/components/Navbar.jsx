import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import logo from '../images/logoLetra.png'; // Asegúrate de que la ruta sea correcta

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo de Nutritalia" />
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/menu" className="nav-link">Menú</Link>
      </div>
    </nav>
  );
}

export default Navbar;
