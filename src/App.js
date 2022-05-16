import "./css/App.css";
import Header from "./components/Header";
import React from "react";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <React.Fragment>
    <Header />
    <ItemListContainer />
    </React.Fragment>
  )
};

export default App;
