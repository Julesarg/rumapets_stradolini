import Navbar from "./Navbar";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixedTop">
      <section className="headerBox">
        <div className="headerBox_left">
          <p>rascadores</p>
        </div>
        <div className="headerBox_right">
          <p>descansos</p>
          <Link to={`/cart/`}>
            <CartWidget />
          </Link>
        </div>
      </section>
      <Navbar />
    </header>
  );
};

export default Header;
