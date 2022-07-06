import React from "react";
import { Link } from "react-router-dom";
const descuentoGeneral = 0.9;

const Item = (props) => {
  return (
    <>
      <div className="item-list-container_item animate__animated animate__fadeIn">
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
                  <p>Deposito/transferencia</p>
                  <p>${props.price * descuentoGeneral}</p>
                </div>
              </div>
              <button>
                <Link to={`/item/${props.id}`}>VER DETALLE</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
