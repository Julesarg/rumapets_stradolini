import { useState } from "react";
const ItemCount = (props) => {
  const [stock2, setStock] = useState(props.initial);

  const addToCart = () => {
    if (stock2 < props.stock) setStock(stock2 + 1);
  };
  const removeFromCart = () => {
    if (stock2 > 1) setStock(stock2 - 1);
  };

  return (
    <div className="control-container">
      <div className="control-container-amount">
        <button onClick={addToCart} className="control-container-button">
          <p className="control-container-button-text">+</p>
        </button>
        <div className="control-container-number">
          <p>{stock2}</p>
        </div>
        <button onClick={removeFromCart} className="control-container-button">
          <p className="control-container-button-text">-</p>
        </button>
      </div>
      <div onClick={()=>{props.onAdd(stock2)}} className="control-container-purchase">
        <p className="control-container-purchase-text">ADD TO CART</p>
      </div>
    </div>
  );
};
export default ItemCount;
