import { useContext } from "react";
import { CartContext } from "../Cart/CartContext";
import CartQuantity from "./CartQuantity";

const CartWidget = () => {
  const test = useContext(CartContext);

  return (
    <button className="headerBox_right-img-container">
      <img src="./imgs/cart/cart.png" alt="cart" className="imgCart" />
      <CartQuantity amount={test.calcItemsQty()}></CartQuantity>
    </button>
  );
};

export default CartWidget;
