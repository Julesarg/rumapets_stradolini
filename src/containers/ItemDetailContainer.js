import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import arrayFetch from "../utilities/arrayFetch";
const { products } = require(`../utilities/products`);

const ItemDetailContainer = () => {
  const [dato, setDato] = useState({});

  useEffect(() => {
    arrayFetch(2000, products[6])
      .then((result) => setDato(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ItemDetail item={dato} />
    </>
  );
};

export default ItemDetailContainer;
