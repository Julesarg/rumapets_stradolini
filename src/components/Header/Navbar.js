import React from "react";
import NavbarToggle from "./NavbarToggle";
import Logo from "./Logo";
import {Link} from 'react-router-dom';

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
            <a href="/#" className="textoNavBar">
              INICIO
            </a>
          </li>
          <li className="nav-menu-item">
          <Link to='./'>
            <a href="/#" className="textoNavBar">
              PRODUCTOS
            </a>
          </Link>
          </li>
          <li className="nav-menu-item">
            <a href="/#" className="textoNavBar">
              MATERIALES
            </a>
          </li>
          <Logo />
          <li className="nav-menu-item">
            <a href="/#" className="textoNavBar">
              PAGOS Y ENVIOS
            </a>
          </li>
          <li className="nav-menu-item">
            <a href="/#" className="textoNavBar">
              CLIENTES
            </a>
          </li>
          <li className="nav-menu-item">
            <a href="/#" className="textoNavBar">
              NOSOTROS
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};
export default Navbar;
