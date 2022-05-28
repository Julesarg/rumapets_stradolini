import { useEffect, useState } from "react";
import ItemList from "../components/itemList/ItemList";
import arrayFetch from "../utilities/arrayFetch";
const { products } = require(`../utilities/products`);

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    arrayFetch(2000, products)
      .then((result) => setDatos(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ItemList items={datos} />
    </>
  );
};

export default ItemListContainer;
