import "./css/App.css";
import React from "react";
import Header from "./components/Header";
import ItemListContainer from "./containers/ItemListContainer";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <ItemListContainer />      
    </React.Fragment>
  );
};

export default App;
