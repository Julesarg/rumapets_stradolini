const CartEmpty = () => {
  return (
    <div className="cart-container-empty">
      <img src="../imgs/cart/cat2.gif" alt="cat gif empty cart"/>
      <div className="cart-container-empty_textContainer">
        <p>Your Cart is empty right now, close to continue searching</p>
      </div>
    </div>
  );
};
export default CartEmpty;
