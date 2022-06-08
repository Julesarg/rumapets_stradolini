import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import Checkout from "./Checkout";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CartContext } from "../Cart/CartContext";

const descuentoGeneral = 0.9;

const ItemModal = (item) => {
  const { id, img, modelo, price } = item;
  const [itemCount, setItemCount] = useState(0);
  const test = useContext(CartContext);

  const onAdd = (cantidad) => {
    alert(`Agregaste ` + cantidad + ` items al carrito`);
    setItemCount(cantidad);
    test.addItem({ cantidad, id, img, modelo, price });
  };

  return (
    <div className="item-list-container-bis animate__animated animate__fadeIn">
      <div className="item-detail-container">
        <div className="item-detail-container_left">
          <img src={item.imgDetail} alt={item.modelo} />
        </div>
        <div className="item-detail-container_right">
          <div className="item-detail-container_right-imgTitle">
            <img src={item.model_image} alt="model Icon logo" />
            <div className="item-detail-container_right-imgTitle_close">
              <Link to="../">X</Link>
            </div>
          </div>
          <div className="item-detail-container_right-properties">
            <h4>Propiedades y caracteristicas</h4>
            <p>{item.detail}</p>
          </div>
          <div className="item-detail-container_right-colorStock">
            <p>
              Consultar disponibilidad de colores <a href="/#">AQUI</a>
            </p>
          </div>
          <div className="item-detail-container_right-prices">
            <div className="item-detail-container_right-prices-list">
              <p>Tarjeta</p>
              <p>${item.price}</p>
            </div>
            <div className="item-detail-container_right-prices-cash">
              <p>Efectivo/transferencia</p>
              <p>${item.price * descuentoGeneral}</p>
            </div>
          </div>
          <div className="item-detail-container_right-addButton">
            {itemCount === 0 ? (
              <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            ) : (
              <Link to="/cart">
                <Checkout />
              </Link>
            )}
          </div>
          <div className="item-detail-container_right-stock">
            <p>stock disponible: {item.stock} unidades</p>
          </div>
          <div className="item-detail-container_right-advice">
            <p>{item.advice}</p>
          </div>
          <div className="item-detail-container_right-return">
            <div className="item-detail-container_right-return_link">
              <Link to={`/category/${item.category}`}>
                Volver a Rascadores {item.category}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
