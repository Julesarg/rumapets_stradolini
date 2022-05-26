import "./css/App.css";
import React from "react";
import Header from "./components/Header";
// import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
    </React.Fragment>
  );
};

export default App;
