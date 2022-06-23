import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import CartEmpty from "./CartEmpty";
import CartItemDetail from "./CartItemDetail";
import CartDeleteAllButton from "./CartDeleteAllButton";
import CartBackToHome from "./CartBackToHome";
import CartCheckout from "./CartCheckout";
import {
  serverTimestamp,
  doc,
  updateDoc,
  collection,
  setDoc,
  increment,
} from "firebase/firestore";
import db from "../../utilities/firebaseConfig";

const Cart = () => {
  const test = useContext(CartContext);

  const crearOrden = () => {
    let arrayForDB = test.cartList.map((item) => ({
      id: item.id,
      price: item.price,
      modelo: item.modelo,
      cantidad: item.cantidad,
    }));

    let pedido = {
      buyer: {
        email: "test@gmail.com",
        name: "Jane Doe",
        phone: "1156859948",
      },
      date: serverTimestamp(),
      total: test.calcTotal(),
      items: arrayForDB,
    };

    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, pedido);
      return newOrderRef;
    };
    createOrderInFirestore()
      .then((result) =>
        alert("Pedido realizado! Tu codigo de compra es" + result.id)
      )
      .catch((err) => console.log(err));

    test.cartList.forEach(async (item) => {
      const itemToUpdate = doc(db, "products", item.id);
      await updateDoc(itemToUpdate, {
        stock: increment(-item.cantidad),
      });
    });

    test.removeAll();
  };
  return (
    <>
      <div className="cart-container">
        <div className="cart-container-inner">
          <div className="cart-container-inner_title">
            <h5>Carrito</h5>
            {test.cartList.length === 0 ? (
              <div className="cart-container-inner_close">
                <Link to="../">X</Link>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="cart-container-inner_body">
            {test.cartList.length === 0 ? (
              <CartEmpty />
            ) : (
              <>
                <CartItemDetail />
                <div className="cart-container-inner_body_bottom">
                <CartDeleteAllButton />
                <CartBackToHome />
                </div>
              </>
            )}
          </div>
        </div>
        {test.cartList.length === 0 ? (
          <></>
        ) : (
          <div className="cart-container-checkout">
            <CartCheckout
              products={test.calcItemsPriceTotal()}
              taxes={test.calcTaxes()}
              discount={test.calcDiscount()}
              total={test.calcTotal()}
            />

            <div className="deleteButton-container">
              <button
                onClick={crearOrden}
                className="deleteButton-container-button two"
              >
                <div className="insider"></div>
                Hacer Pedido
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="empty_container"></div>
    </>
  );
};

export default Cart;
