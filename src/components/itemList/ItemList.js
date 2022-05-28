import React from "react";
import Item from "./Item";


const ItemList = (props) => {
  return (
    <div className="item-list-container animate__animated animate__fadeIn">
      
      {props.items.length > 0 ? (
        props.items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            img={item.img}
            imgDetai={item.imgDetai}
            marca={item.marca}
            tipo={item.tipo}
            modelo={item.modelo}
            model_image={item.model_image}
            price={item.price}
            link={item.link}
            detail={item.detail}
            height={item.height}
            width={item.width}
            depth={item.depth}
            weight={item.weight}
            material_de_tubos={item.material_de_tubos}
            material_de_estructura={item.material_de_estructura}
            stock={item.stock}
            advice={item.advice}
          />
        ))
      ) : (
        <section class="container-spinner">
          <div class="cssload-container">
            <div class="cssload-zenith"></div>
            <p>LOADING</p>
          </div>
        </section>
      )}
    </div>
  );
};

export default ItemList;
