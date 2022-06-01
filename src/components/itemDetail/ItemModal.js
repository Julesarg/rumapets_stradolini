import React from "react";
import ItemCount from "../ItemCount";
import Checkout from "./Checkout";
import { Link } from "react-router-dom";
import { useState } from "react";

const descuentoGeneral = 0.9;

const Item = (props) => {
const [itemCount, setItemCount] = useState(0)

  const onAdd = (stock2) => {
    alert(`Agregaste ` + stock2 + ` items al carrito`);
    setItemCount(stock2);
  };

  return (
    <div className="item-list-container-bis animate__animated animate__fadeIn">
      <div className="item-detail-container">
        <div className="item-detail-container_left">
          <img src={props.imgDetail} alt={props.modelo} />
        </div>
        <div className="item-detail-container_right">
          <div className="item-detail-container_right-imgTitle">
            <img src={props.model_image} alt="model Icon logo" />
            <div className="item-detail-container_right-imgTitle_close">            
              <Link to="../">
                X
              </Link>
            </div>
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
           { itemCount === 0
            ? <ItemCount stock={props.stock} initial={1} onAdd={onAdd} />
          : <Link to = '/cart'> <Checkout /> </Link>
           }
          </div>
          <div className="item-detail-container_right-stock">
            <p>stock disponible: {props.stock} unidades</p>
          </div>
          <div className="item-detail-container_right-advice">
            <p>{props.advice}</p>
          </div>
          <div className="item-detail-container_right-return">
            <div className="item-detail-container_right-return_link">
              <Link to={`/category/${props.category}`}>
                Volver a Rascadores {props.category}
              </Link>
              </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
