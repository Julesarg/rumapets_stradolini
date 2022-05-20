import Item from "./Item";

const ItemList = (props) => {
  return (
    <div className="item-list-container_item">
      <div
        onMouseOver={hoverImage}
        onMouseLeave={leaveHover}
        className="item-list-container_item_img"
      >
        <img src={props.img} alt={props.modelo} />
        <div className="item-list-container_item_img_overlay">
          <div className="item-list-container_item_img_overlay_textBox">
            <p>{props.tipo}</p>
            <p>Altura: {props.height}</p>
            <p>Ancho: {props.width}</p>
            <p>Profundidad: {props.depth}</p>
            <p>Peso: {props.weight}</p>
            <button>
              <a href={props.link} target="_blank">Ver Detalle</a>
            </button>
          </div>
        </div>
      </div>
      <div className="item-list-container_item_title">
        <h3>{props.modelo}</h3>
      </div>
      <Item price={props.price} stock={props.stock} />
    </div>
  );
};
const hoverImage = () => {
  console.log(`hola`);
};
const leaveHover = () => {
  console.log(`chau`);
};

export default ItemList;
