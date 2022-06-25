import "./css/App.css";
import React from "react";
import Header from "./components/headerNavbarFolder/Header";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/cartFolder/Cart";
import CartContextProvider from "./components/cartFolder/CartContext";
import Footer from "./components/footerFolder/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <Toaster toastOptions={{ duration: 5000 }} position="bottom-center"
  />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
};

export default App;
