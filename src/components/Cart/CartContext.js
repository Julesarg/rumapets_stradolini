import { createContext, useState } from "react";


export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);


  //agregar al carrito
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
      setCartList([...cartList]);
    } else {
      setCartList([...cartList, { cantidad, id, img, modelo, price }]);
    }
  };

  //borrar del carrito individual
  const removeItem = (id) => {
    const resetCantidad = cartList.find((el) => el.id === id);
    resetCantidad.cantidad = 0;
    const newArray = cartList.filter((el) => el.id !== id);
    setCartList(newArray);
  };

  //borrar todo
  const removeAll = () => {
    setCartList([]);
  };

  //mostrar cantidad de items en carrito
  const calcItemsQty = () => {
    let totalAmount = cartList.map((item) => item.cantidad);
    return totalAmount.reduce(
      (accumulador, valorDos) => accumulador + valorDos,
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

  //descuento por promocion
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
