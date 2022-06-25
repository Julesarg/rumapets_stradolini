import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import CartDeleteItemButton from "./CartDeleteItemButton";

const CartItemDetail = () => {
  const test = useContext(CartContext);

  return test.cartList.map((item) => (
    <div className="cart-container-inner_body_product">
      <div className="cart-container-inner_body_product_image">
        <img src={item.img} alt="imagen producto" />
      </div>

      <div className="cart-container-inner_body_product_title">
        <div className="cart-container-inner_body_product_title_texts">
          <p className="model">Modelo</p>
          <p>{item.modelo}</p>
        </div>
      </div>

      <div className="cart-container-inner_body_product_price">
        <div className="cart-container-inner_body_product_price_texts">
          <p className="price">Precio</p>
          <p>${item.price}</p>
        </div>
      </div>

      <div className="cart-container-inner_body_product_title">
        <div className="cart-container-inner_body_product_title_texts">
          <p className="model">Subtotal</p>
          <p>${item.price * item.cantidad}</p>
        </div>
      </div>

      <div className="cart-container-inner_body_product_quantity">
        <div className="cart-container-inner_body_product_quantity_inner">
          <p>Cantidad</p>
          <div className="cart-container-inner_body_product_quantity_buttons">
            <p>{item.cantidad}</p>
          </div>
        </div>
      </div>
      <CartDeleteItemButton item={item} />
    </div>
  ));
};

export default CartItemDetail;
