import ItemCount from "./ItemCount";
const descuentoGeneral = 0.90

const Item = (props) => {
    return (
        <div className="item-list-container_item">
            <div className="item-list-container_item_img">
                <img src={props.img} alt={props.modelo}/>
            </div>
        <div className="item-list-container_item_title">
            <h3>{props.modelo}</h3>
        </div>
        <div className="item-list-container_item_prices">
            <div className="item-list-container_item_prices_listPrice">
            <p>Tarjeta</p>
            <p>${props.price}</p>
            </div>
            <div className="item-list-container_item_prices_cashPrice">
                <p>Efectivo/transferencia</p>
                <p>${props.price*descuentoGeneral}</p>
            </div>
        </div>
            <ItemCount />
        </div>
    )
};

export default Item;