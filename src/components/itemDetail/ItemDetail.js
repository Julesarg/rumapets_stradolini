import React from "react";
import ItemModal from "./ItemModal";
import Loader from "../../utilities/Loader";

const ItemDetail = (props) => {
  return (
    <>
      <ItemModal
        key={props.item.id}
        id={props.item.id}
        img={props.item.img}
        imgDetail={props.item.imgDetail}
        marca={props.item.marca}
        tipo={props.item.tipo}
        size={props.item.size}
        modelo={props.item.modelo}
        model_image={props.item.model_image}
        price={props.item.price}
        link={props.item.link}
        detail={props.item.detail}
        height={props.item.height}
        width={props.item.width}
        depth={props.item.depth}
        weight={props.item.weight}
        material_de_tubos={props.item.material_de_tubos}
        material_de_estructura={props.item.material_de_estructura}
        stock={props.item.stock}
        advice={props.item.advice}
      />
    </>
  );
};

export default ItemDetail;