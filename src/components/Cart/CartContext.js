import { createContext, useReducer, useState } from "react";

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

  //borrar del carrito ok
  const removeItem = (id) => {
    const resetCantidad = cartList.find((el) => el.id === parseInt(id));
    resetCantidad.cantidad = 0;
    const newArray = cartList.filter((el) => el.id !== parseInt(id));
    setCartList(newArray);
  };

  //borrar todo OK
  const removeAll = () => {
    setCartList([]);
  };

  //mostrar cantidad de items en carrito
  const calcItemsQty = () => {
    let totalAmount = cartList.map((item) => item.cantidad);
    return totalAmount.reduce(
      (valorInicial, valorFinal) => valorInicial + valorFinal,
      0
    );
  };

  //subtotal precio productos
  const calcItemsPriceTotal = () => {
    let totalItemsPrice = cartList.map((item) => item.price * item.cantidad);
    return totalItemsPrice.reduce(
      (valorInicial, valorFinal) => valorInicial + valorFinal,
      0
    );
  };

  //impuestos por embalaje
  const calcTaxes = () => {
    let totalTaxes = calcItemsPriceTotal() * 0.1;
    return totalTaxes;
  };

  //impuestos por embalaje
  const calcDiscount = () => {
    let totalDiscount = calcItemsPriceTotal() * 0.15;
    return totalDiscount;
  };

  //total de compra
  const calcTotal = () => {
    let totalPurchase = calcItemsPriceTotal() + calcTaxes() - calcDiscount();
    return totalPurchase;
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addItem,
        removeItem,
        removeAll,
        calcItemsQty,
        calcItemsPriceTotal,
        calcTaxes,
        calcDiscount,
        calcTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
