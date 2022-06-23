import { useState } from "react";
const ItemCount = (props) => {
  const [stock, setStock] = useState(props.initial);

  const moreItem = () => {
    if (stock < props.stock) setStock(stock + 1);
  };
  const lessItem = () => {
    if (stock > 1) setStock(stock - 1);
  };
  return (
    <div className="control-container">
      <div className="control-container-amount">
        <button onClick={lessItem} className="control-container-button">
          <span className="control-container-button-text">-</span>
        </button>
        <div className="control-container-number">
          <p>{stock}</p>
        </div>
        <button onClick={moreItem} className="control-container-button">
          <span className="control-container-button-text">+</span>
        </button>
      </div>
      <button
        onClick={() => {
          props.onAdd(stock);
        }}
        className="control-container-purchase"
      >
        <span className="control-container-purchase-text">ADD TO CART</span>
      </button>
    </div>    
  );
};
export default ItemCount;
