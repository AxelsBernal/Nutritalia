import React from 'react';
import '../css/Menu.css';
import menuImage from '../images/Comida1.jpg'; // Asegúrate de reemplazar esta ruta con tu imagen real

function Menu() {
  
  return (
    
    <div className="menu">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet"/>


      {/* Imagen del Menú */}
      <div className="menu-image-container">
        <img src={menuImage} alt="Menú principal" className="menu-image" />
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
        {/* Título del Menú */}
        <h1 className="menu-title">NUESTRO</h1>
        <h1 className="menu-title">MENÙ</h1>
        <br/>
        <br/>
        <br/>

      {/* Lista de comidas */}
      <div className="menu-list">
        <div className="menu-item">
          <h2>LASAÑA BOLOGNESA (4 PORCIONES)</h2>
          <p>
            Pasta al horno en capas con carne molPasta al horno en capas con carne molida, salsa de tomate, bechamel y queso mozzarella gratinado.
          </p>
          <text className="menu-price">$350.00</text>
        </div>

        <div className="menu-item">
          <h2>RAVIOLIS DE ESPINACA Y RICOTTA (4 PORCIONES)</h2>
          <p>
            Pasta rellena de espinaca y queso ricotta, servida con una salsa cremosa de mantequilla y salvia.
          </p>
          <text className="menu-price">$295.00</text>
        </div>

        <div className="menu-item">
          <h2>GNOCCHI EN SALSA DE GORGONZOLA (4 PORCIONES)</h2>
          <p>
            Albóndigas de papa italianas, bañadas en una cremosa salsa de queso gorgonzola con nueces trituradas.
          </p>
          <text className="menu-price">$285.00</text>
        </div>

        <div className="menu-item">
          <h2>RISOTTO DE HONGOS PORCINI (4 PORCIONES)</h2>
          <p>
            Arroz cremoso preparado con hongos porcini, vino blanco, parmesano y un toque de aceite de trufa.
          </p>
          <text className="menu-price">$320.00</text>
        </div>

        <div className="menu-item">
          <h2>PIZZA MARGHERITA (TAMAÑO MEDIANO)</h2>
          <p>
            Base de pizza delgada, salsa de tomate casera, queso mozzarella fresco y albahaca.
          </p>
          <text className="menu-price">$250.00</text>
        </div>

        <div className="menu-item">
          <h2>PENNE ARRABBIATA (4 PORCIONES)</h2>
          <p>
            Pasta corta bañada en una salsa de tomate picante con ajo, aceite de oliva y albahaca.
          </p>
          <text className="menu-price">$240.00</text>
        </div>

        <div className="menu-item">
          <h2>CALZONE DE JAMÓN Y QUESO (4 PORCIONES)</h2>
          <p>
            Masa de pizza rellena de jamón, queso ricotta y mozzarella, horneada a la perfección.
          </p>
          <text className="menu-price">$260.00</text>
        </div>

        <div className="menu-item">
          <h2>TIRAMISÚ TRADICIONAL (4 PORCIONES)</h2>
          <p>
            Postre italiano en capas con bizcocho de café, mascarpone y un toque de cacao.
          </p>
          <text className="menu-price">$280.00</text>
        </div>
      </div>

    </div>
  );
}

export default Menu;
