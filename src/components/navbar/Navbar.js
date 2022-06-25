import React from "react";
import NavbarToggle from "./NavbarToggle";
import Logo from "./Logo";
import { Link } from "react-router-dom";

//pdte responsive toggle
const Navbar = () => {
  return (
    <section className="navegacion">
      <nav className="nav">
        <button
          onClick={() => NavbarToggle()}
          className="toggle"
          aria-label="open Menu"
        >
          <img src="./imgs/general/hamburgerMenu.png" alt="hamburgerMenu" />
        </button>
        <div className="container-logo-reduced">
          <img
            src="./imgs/general/logo.png"
            alt="logo"
            className="logoHeader"
          />
        </div>
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <div className="textoNavBar">INICIO</div>
          </li>
          <li className="nav-menu-item">
            <Link to="./">
              <div className="textoNavBar">PRODUCTOS</div>
            </Link>
          </li>
          <li className="nav-menu-item">
            <div className="textoNavBar">MATERIALES</div>
          </li>
          <Logo />
          <li className="nav-menu-item">
            <div className="textoNavBar">PAGOS Y ENVIOS</div>
          </li>
          <li className="nav-menu-item">
            <div className="textoNavBar">CLIENTES</div>
          </li>
          <li className="nav-menu-item">
            <div className="textoNavBar">NOSOTROS</div>
          </li>
        </ul>
      </nav>
    </section>
  );
};
export default Navbar;
