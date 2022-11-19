import React from "react";
import F from '../../Images/F.png'
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="container__navbar">
      <nav className="navbar">
        <img src={F} alt="logominimizado"/>
        <ul className="container__nav-items">
            <li className="nav-item">Indumentaria</li>
            <li className="nav-item">Accesorios</li>
            <li className="nav-item">Hardware</li>
            <li className="nav-item">Nosotros</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
