import Navbar from "./Navbar";

const Header = () =>{
    return (
        <header className="fixedTop">
        <section className="headerBox">
          <div className="headerBox_left">
            <p>rascadores</p>
          </div>
          <div className="headerBox_right">
            <p>descansos</p>
            <div className="headerBox_right-img-container">
              <img
                src="./imgs/cart/cart.png"
                alt="carrito"
                className="imgCarrito"
              />
            </div>
          </div>
        </section>
    <Navbar/>    
    </header>
    )
};

export default Header;

