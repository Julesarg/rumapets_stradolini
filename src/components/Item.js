import React from "react";
import ItemCount from "./ItemCount";
const descuentoGeneral = 0.9;

const Item = (props) => {
  const onAdd = (stock2) => {
    alert(`Agregaste ` + stock2 + ` items al carrito`);
  };

  return (
    <React.Fragment>
      <div className="item-list-container_item">
        <div className="item-list-container_item_title">
          <h3>{props.modelo}</h3>
        </div>

        <div className="item-list-container_item_img">
          <img src={props.img} alt={props.modelo} />

          <div className="item-list-container_item_img_overlay">
            <div className="item-list-container_item_img_overlay_textBox">
              <div className="item-list-container_item_img_overlay_textBox_type">
                <p>{props.tipo}</p>
              </div>

              <div className="item-list-container_item_img_overlay_textBox_properties">
                <p>Altura: {props.height}</p>
                <p>Ancho: {props.width}</p>
                <p>Profundidad: {props.depth}</p>
                <p>Peso: {props.weight}</p>
              </div>
              <div className="item-list-container_item_img_overlay_textBox_prices">
                <div className="item-list-container_item_img_overlay_textBox_prices_list">
                  <p>Tarjeta</p>
                  <p>${props.price}</p>
                </div>

                <div className="item-list-container_item_img_overlay_textBox_prices_cash">
                  <p>Efectivo/transferencia</p>
                  <p>${props.price * descuentoGeneral}</p>
                </div>
              </div>
              <button>
                <a href={props.link} target="_blank">
                  Ver Detalle
                </a>
              </button>
            </div>
          </div>
        </div>
        <ItemCount stock={props.stock} initial={1} onAdd={onAdd} />
      </div>
    </React.Fragment>
  );
};

export default Item;
