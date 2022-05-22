import ItemCount from "./ItemCount";
const descuentoGeneral = 0.9;

const Item = (props) => {

  const onAdd = (stock2) =>{
    alert(`Agregaste ` + stock2 + ` items al carrito`);
  }

  return (
    <>
      <div className="item-list-container_item_prices">
        <div className="item-list-container_item_prices_listPrice">
          <p>Tarjeta</p>
          <p>${props.price}</p>
        </div>
        <div className="item-list-container_item_prices_cashPrice">
          <p>Efectivo/transferencia</p>
          <p>${props.price * descuentoGeneral}</p>
        </div>
      </div>
      <ItemCount stock={props.stock} initial={1} onAdd = {onAdd}/>
    </>
  );
};

export default Item;
