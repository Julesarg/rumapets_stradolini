import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
 
  
//agregar al carrito
  const addToCart = (item) => {
    setCartList([...cartList, item]);
  };


  return (
    <CartContext.Provider value={{ cartList, addToCart}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
