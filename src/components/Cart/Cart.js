import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import CartEmpty from "./CartEmpty";
import CartItemDetail from "./CartItemDetail";
import CartDeleteAllButton from "./CartDeleteAllButton";

const Cart = () => {
  const test = useContext(CartContext);
  return (
    <>
      <div className="cart-container">
          <div className="cart-container-inner">
              <div className="cart-container-inner_title">
                  <h5>Carrito</h5>
                  <div className="cart-container-inner_close">            
                    <Link to="../">X</Link>
                </div>
              </div>
              <div className="cart-container-inner_body">
              {test.cartList.length === 0 ? <CartEmpty /> : <><CartItemDetail /><CartDeleteAllButton /></>}
              </div>            
          </div>
      </div>
    </>
  );
};

export default Cart;