import NavbarToggle from "./NavbarToggle";

const Navbar = () => {

  return (
    <section className="navegacion">
      <nav className="nav">
        <button onClick={NavbarToggle()} className="toggle" aria-label="open Menu">
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
            <a href="index.html" className="textoNavBar">
              INICIO
            </a>
          </li>
          <li className="nav-menu-item">
            <a href="#" className="textoNavBar">
              PRODUCTOS
            </a>
          </li>
          <li className="nav-menu-item">
            <a href="#" className="textoNavBar">
              MATERIALES
            </a>
          </li>
          <li className="nav-menu-img">
            <img
              src="./imgs/general/logo.png"
              alt="logo"
              className="logoHeader"
            />
          </li>
          <li className="nav-menu-item">
            <a href="#" className="textoNavBar">
              PAGOS Y ENVIOS
            </a>
          </li>
          <li className="nav-menu-item">
            <a href="#" className="textoNavBar">
              CLIENTES
            </a>
          </li>
          <li className="nav-menu-item">
            <a href="#" className="textoNavBar">
              NOSOTROS
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};
export default Navbar;