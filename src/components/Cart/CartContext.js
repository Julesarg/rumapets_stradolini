import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  //agregar al carrito OK
  const addItem = ({ cantidad, id, img, modelo, price }) => {
    const found = cartList.find((el) => el.id === id);

    const findDuplicated = (found, cartList) => {
      cartList.forEach((element) => {
        if (found.id === element.id) {
          return (element.cantidad = cantidad + element.cantidad);
        }
      });
    };
    if (found) {
      findDuplicated(found, cartList);
    } else {
      setCartList([...cartList, { cantidad, id, img, modelo, price }]);
    }
  };

  //borrar del carrito ME FALTA
  const removeItem = (id) => {
    const newArray = cartList.filter((el) => el.id !== parseInt(id));
    setCartList(newArray);
  };

  //borrar todo OK
  const removeAll = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider value={{ cartList, addItem, removeItem, removeAll }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
