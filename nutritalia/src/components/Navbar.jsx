import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import logo from '../images/logo.png'; // Importa el logo

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/menu" className="nav-link">Menú</Link>
      </div>
      <img src={logo} alt="Logo" className="logo" /> {/* Usa el logo importado */}
    </nav>
  );
}

export default Navbar;
