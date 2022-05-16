import "./css/App.css";
import Header from "./components/Header";
import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

const App = () => {
  return (
    <React.Fragment>
    <Header />
    <ItemListContainer greeting = "Hola Mundo" />
    <ItemCount />
    </React.Fragment>
  )
};

export default App;
