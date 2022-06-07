import "./css/App.css";
import React from "react";
import Header from "./components/Header/Header";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./components/Cart/CartContext";

const App = () => {
  return (
    <>
    <CartContextProvider>
        <BrowserRouter>
        <Header />
          <Routes>        
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
};

export default App;
