import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <div className="cart-container animate-animated animate__fadeOut">
          <div className="cart-container-inner">
              <div className="cart-container-inner_title">
                  <h5>Carrito</h5>
                  <div className="cart-container-inner_close">            
                    <Link to="../">X</Link>
                </div>
            </div>
              <div className="cart-container-inner_body">

              </div>

          </div>


      </div>
    </>
  );
};

export default Cart;