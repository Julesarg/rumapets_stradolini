const ItemCount = () =>{
    return (
<div className="cajaCarritoProducto">
    <div className="cantidadProducto">
        <p>Cantidad</p>
        <div className="cantidadProductoInterior">
            <button><p>-</p></button>
            <div><p>1</p></div>
            <button><p>+</p></button>        
        </div>
        <div className="agregarAlCarrito"><p>Agregar al Carrito</p></div>
    </div>
</div>
    );
};

export default ItemCount;