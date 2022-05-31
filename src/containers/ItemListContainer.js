import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/itemList/ItemList";
import arrayFetch from "../utilities/arrayFetch";
const { products } = require(`../utilities/products`);

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    arrayFetch(
      2000,
      id === undefined ? products : products.filter((item) => item.category === id))
      .then((result) => setDatos(result))
      .catch((err) => console.log(err))
    },
    [id]);

      

  return (
      <ItemList items={datos} />  
  );
};

export default ItemListContainer;
