import "./css/App.css";
import React from "react";
import Header from "./components/Header/Header";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemCartContainer from "./containers/ItemCartContainer";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>        
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<ItemCartContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
