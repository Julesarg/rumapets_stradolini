import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import CartEmpty from "./CartEmpty";
import CartItemDetail from "./CartItemDetail";
import CartDeleteAllButton from "./CartDeleteAllButton";
import CartCheckout from "./CartCheckout";

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
            {test.cartList.length === 0 ? (
              <CartEmpty />
            ) : (
              <>
                <CartItemDetail />
                <CartDeleteAllButton />
              </>
            )}
          </div>
        </div>
        {test.cartList.length === 0 ? (
          <></>
        ) : (
          <div className="cart-container-checkout">
            <CartCheckout
              products={test.calcItemsPriceTotal()}
              taxes={test.calcTaxes()}
              discount={test.calcDiscount()}
              total={test.calcTotal()}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
