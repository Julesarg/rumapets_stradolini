import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <li className="nav-menu-img">
        <Link to="./">
          <img
            src="./imgs/general/logo.png"
            alt="logo"
            className="logoHeader"
          />
        </Link>
      </li>
    </>
  );
};

export default Logo;
