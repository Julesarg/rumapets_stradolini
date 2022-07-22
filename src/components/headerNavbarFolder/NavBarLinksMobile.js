import Logo from "./Logo";
import { Link } from "react-router-dom";

const NavBarLinksMobile = (props) =>{
    return(
        <ul className="nav-menu animate__animated animate__fadeInLeft">
          <div className="nav-menu-item-menu"><p>MENU</p></div>
        <li onClick={()=> props.mobile && props.closeMenu()} className="nav-menu-item">
          <div className="textoNavBar">Inicio</div>
        </li>
        <li onClick={()=> props.mobile && props.closeMenu()} className="nav-menu-item">
          <Link to="./">
            <div className="textoNavBar">Productos</div>
          </Link>
        </li>
        <li onClick={()=> props.mobile && props.closeMenu()} className="nav-menu-item">
          <div className="textoNavBar">Materiales</div>
        </li>
        <Logo onClick={()=> props.mobile && props.closeMenu()} />
        <li onClick={()=> props.mobile && props.closeMenu()} className="nav-menu-item">
          <div className="textoNavBar">Pagos y Envios</div>
        </li>
        <li onClick={()=> props.mobile && props.closeMenu()} className="nav-menu-item">
          <div className="textoNavBar">Clientes</div>
        </li>
        <li onClick={()=> props.mobile && props.closeMenu()} className="nav-menu-item">
          <div className="textoNavBar">Nosotros</div>
        </li>
      </ul>
    )
}

export default NavBarLinksMobile;