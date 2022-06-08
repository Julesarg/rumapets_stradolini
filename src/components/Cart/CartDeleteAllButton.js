import { CartContext } from "../Cart/CartContext";
import React, { useContext } from "react";

const CartDeleteAllButton = () => {
  const test = useContext(CartContext);

  const deleteAll = () => {
    test.removeAll();
  };

  return (
    <div className="deleteButton-container">
      <button onClick={deleteAll} className="deleteButton-container-button one">
        <div className="insider"></div>
        Vaciar Carrito
      </button>
    </div>
  );
};

export default CartDeleteAllButton;
