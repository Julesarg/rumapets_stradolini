import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/itemList/ItemList";
import { firestoreFetch } from "../utilities/firestoreFetch";

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    firestoreFetch(id)
      .then((result) => setDatos(result))
      .catch((err) => console.log(err));
  }, [id]);
  return <ItemList items={datos} />;
};

export default ItemListContainer;
