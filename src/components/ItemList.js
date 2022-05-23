import React from "react";
import Item from "./Item";

const ItemList = (products) => {
  return (
    <>
      <div className="item-list-container">
        {products.length > 0 ? (
          products.map((item) => (
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
          <p>hola</p>
        )}
      </div>
    </>
  );
};

export default ItemList;
