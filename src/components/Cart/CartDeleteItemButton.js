import { CartContext } from "../Cart/CartContext";
import React, { useContext } from "react";

const CartDeleteItemButton = ({ items }) => {
  const test = useContext(CartContext);

  const deleteItem = () => {
    test.removeItem(items.id);
  };

  return (
    <button
      onClick={deleteItem}
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
