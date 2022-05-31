import React from "react";
import Item from "./Item";
import Loader from "../../utilities/Loader";
import Categories from "./Categories";

const ItemList = (props) => {
  return (
    <>
      <Categories />
      <div className="item-list-container animate__animated animate__fadeIn">
        {props.items.length > 0 ? (
          props.items.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              img={item.img}
              imgDetail={item.imgDetail}
              marca={item.marca}
              tipo={item.tipo}
              size={item.size}
              category={item.category}
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
          <Loader />
        )}
      </div>
    </>
  );
};

export default ItemList;
