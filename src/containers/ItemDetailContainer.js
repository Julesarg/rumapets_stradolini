import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/itemDetail/ItemDetail";
import arrayFetch from "../utilities/arrayFetch";
const { products } = require(`../utilities/products`);

const ItemDetailContainer = () => {
  const [dato, setDato] = useState({});
  const { id } = useParams();

  useEffect(() => {
    arrayFetch(
      0,
      products.find((item) => item.id === Number(id))
    )
      .then((result) => setDato(result))
      .catch((err) => console.log(err));
  }, []);

  return (
      <ItemDetail item={dato} />
  );
};

export default ItemDetailContainer;