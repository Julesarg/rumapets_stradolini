import Logo from "./Logo";
import { Link } from "react-router-dom";

const NavBarLinks = (props) =>{
    return(
        <ul className="nav-menu">
        <li onClick={()=> props.mobile && props.closeMenu()} className="nav-menu-item">
          <div className="textoNavBar">INICIO</div>
        </li>
        <li onClick={()=> props.mobile && props.closeMenu()} className="nav-menu-item">
          <Link to="./">
            <div className="textoNavBar">PRODUCTOS</div>
          </Link>
        </li>
        <li onClick={()=> props.mobile && props.closeMenu()} className="nav-menu-item">
          <div className="textoNavBar">MATERIALES</div>
        </li>
        <Logo onClick={()=> props.mobile && props.closeMenu()} />
        <li onClick={()=> props.mobile && props.closeMenu()} className="nav-menu-item">
          <div className="textoNavBar">PAGOS Y ENVIOS</div>
        </li>
        <li onClick={()=> props.mobile && props.closeMenu()} className="nav-menu-item">
          <div className="textoNavBar">CLIENTES</div>
        </li>
        <li onClick={()=> props.mobile && props.closeMenu()} className="nav-menu-item">
          <div className="textoNavBar">NOSOTROS</div>
        </li>
      </ul>
    )
}

export default NavBarLinks;