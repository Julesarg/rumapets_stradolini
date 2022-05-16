const CartWidget = () => {
    return (
  <button className="headerBox_right-img-container">
    <img src="./imgs/cart/cart.png" alt="cart" className="imgCart" />
    <span id="imgCartCounter" class="imgCartCounter">0</span>
  </button>
    );
};

export default CartWidget;
