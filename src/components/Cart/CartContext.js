import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  
//agregar al carrito

const addItem = (item, quantity) => {
  const foundItem = cartList.find(el => el.id == item.id);


  const findDuplicated = (foundItem, cartList) => {

    cartList.forEach( (element) => {
      if (foundItem.id === element.id){
        return (element.cantidad = quantity + element.cantidad
    )}
    })
    
  }
  
  if (foundItem) { findDuplicated(foundItem, cartList) } else { setCartList([...cartList, item])}
}


  return (
    <CartContext.Provider value={{ cartList, addItem}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
