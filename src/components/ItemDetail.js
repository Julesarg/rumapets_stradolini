import React from "react";
import ItemModal from "./ItemModal";

const ItemDetail = (props) => {
  return (
    <>
      {props.item != [] ? (
        <div className="item-list-container animate__animated animate__fadeIn">
          <ItemModal
            key={props.item.id}
            img={props.item.img}
            imgDetail={props.item.imgDetail}
            marca={props.item.marca}
            tipo={props.item.tipo}
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
        </div>
      ) : (
        <section class="container-spinner">
          <div class="cssload-container">
            <div class="cssload-zenith"></div>
            <p>LOADING</p>
          </div>
        </section>
      )}
    </>
  );
};

export default ItemDetail;
