import React from "react";
import Item from "./Item";

const ItemList = (products) => {
  return (
    <div className="item-list-container animate__animated animate__fadeIn">
      {products.items.length > 0 ? (
        products.items.map((item) => (
          <Item
            key={item.id}
            img={item.img}
            marca={item.marca}
            tipo={item.tipo}
            modelo={item.modelo}
            price={item.price}
            link={item.link}
            height={item.height}
            width={item.width}
            depth={item.depth}
            weight={item.weight}
            material_de_tubos={item.material_de_tubos}
            material_de_estructura={item.material_de_estructura}
            stock={item.stock}
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
