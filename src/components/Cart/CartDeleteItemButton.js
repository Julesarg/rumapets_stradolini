import { CartContext } from "../Cart/CartContext";
import React, { useContext } from "react";

const CartDeleteItemButton = ({item}) => {
  
  const itemId = item.id
  const { removeItem } = useContext(CartContext);

  return (
    <button
    onClick={(e) => {e.stopPropagation();removeItem(itemId)}}
      className="cart-container-inner_body_product_delete"
    >
      <div
        className="btn-flip"
        data-back="Segura/o?"
        data-front="Eliminar"
      ></div>
    </button>
  );
};

export default CartDeleteItemButton;
