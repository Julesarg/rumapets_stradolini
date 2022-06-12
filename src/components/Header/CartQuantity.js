const CartQuantity = ({ amount }) => {
  if (amount === 0) {
    return <span id="imgCartCounter" className="imgCartCounterEmpty"></span>;
  } else {
    return (
      <span id="imgCartCounter" className="imgCartCounter">
        {amount}
      </span>
    );
  }
};

export default CartQuantity;
