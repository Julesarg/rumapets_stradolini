import React from "react";
import ItemCount from "../ItemCount";

const descuentoGeneral = 0.9;

const Item = (props) => {
  const onAdd = (stock2) => {
    alert(`Agregaste ` + stock2 + ` items al carrito`);
  };
  return (
    <div className="item-list-container animate__animated animate__fadeIn">
    <div className="item-detail-container">
      <div className="item-detail-container_left">
        <img src={props.imgDetail} alt={props.modelo} />
      </div>
      <div className="item-detail-container_right">
        <div className="item-detail-container_right-imgTitle">
          <img src={props.model_image} alt="model Icon logo" />
        </div>
        <div className="item-detail-container_right-properties">
          <h4>Propiedades y caracteristicas</h4>
          <p>{props.detail}</p>
        </div>
        <div className="item-detail-container_right-colorStock">
          <p>
            Consultar disponibilidad de colores <a href="/#">AQUI</a>
          </p>
        </div>
        <div className="item-detail-container_right-prices">
          <div className="item-detail-container_right-prices-list">
            <p>Tarjeta</p>
            <p>${props.price}</p>
          </div>
          <div className="item-detail-container_right-prices-cash">
            <p>Efectivo/transferencia</p>
            <p>${props.price * descuentoGeneral}</p>
          </div>
        </div>
        <div className="item-detail-container_right-addButton">
          <ItemCount stock={props.stock} initial={1} onAdd={onAdd} />
        </div>
        <div className="item-detail-container_right-stock">
          <p>stock disponible: {props.stock} unidades</p>
        </div>
        <div className="item-detail-container_right-advice">
          <p>{props.advice}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Item;
