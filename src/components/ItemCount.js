import { useState } from "react";

const ItemCount = () => {
  const [stock, setStock] = useState(1);
  const addToCart = () => {
    if (stock < 10) setStock(stock + 1);
  };
  const removeFromCart = () => {
    if (stock > 1) setStock(stock - 1);
  };

  return (
    <div className="control-container">
      <div className="control-container-amount">
        <button onClick={addToCart} className="control-container-button">
          <p className="control-container-button-text">+</p>
        </button>
        <div className="control-container-number">
          <p>{stock}</p>
        </div>
        <button onClick={removeFromCart} className="control-container-button">
          <p className="control-container-button-text">-</p>
        </button>
      </div>
      <div className="control-container-purchase">
        <p className="control-container-purchase-text">ADD TO CART</p>
      </div>
    </div>
  );
};
export default ItemCount;
