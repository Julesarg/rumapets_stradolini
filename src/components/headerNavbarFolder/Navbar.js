import React, { useState } from "react";
import NavBarLinksMobile from "./NavBarLinksMobile";
import NavbarLinks from "./NavbarLinks";
import {GiHamburgerMenu} from "react-icons/gi";
import {IoClose} from "react-icons/io5";
import {UseState} from "react";

const Navbar = ()=> {

  const [open,setOpen] = useState(false);

  const hamburgerOpen = <GiHamburgerMenu onClick={ ()=> setOpen(!open)} className="hamburger animate__animated animate__fadeIn"/>
  const hamburgerClose = <IoClose onClick={ ()=> setOpen(!open)} className="hamburgerClose animate__animated animate__fadeIn"/>
  const closeMenu = () => setOpen(false);

  return (
    <section className="navegacion">
      <nav className="nav">
        <NavbarLinks />
      </nav>
      <nav className="navMobile" >
        {open ? hamburgerClose : hamburgerOpen}
        {open && <NavBarLinksMobile mobile={true} closeMenu={closeMenu}/>
}
      </nav>
    </section>
  );
};
export default Navbar;