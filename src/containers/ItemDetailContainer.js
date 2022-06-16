import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/itemDetail/ItemDetail";
import { firestoreFetchDetail } from "../utilities/firestoreFetch";

const ItemDetailContainer = () => {
  const [dato, setDato] = useState({});
  const { id } = useParams();

  useEffect(() => {
    firestoreFetchDetail(id)
      .then((result) => setDato(result))
      .catch((err) => console.log(err));
  }, []);
  return <ItemDetail item={dato} />;
};

export default ItemDetailContainer;
