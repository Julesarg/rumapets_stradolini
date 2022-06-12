const CartCheckout = ({ products, taxes, discount, total }) => {
  return (
    <>
      <div className="cart-container-checkout_title">
        <h5>DETALLE DE COMPRA</h5>
      </div>

      <div className="cart-container-checkout_texts_container">
        <p>Subtotal de productos</p>
        <p>${products}</p>
      </div>

      <div className="cart-container-checkout_texts_container">
        <p>Costos por embalaje:</p>
        <p>${taxes}</p>
      </div>

      <div className="cart-container-checkout_texts_container">
        <p>Descuento HOTSALE:</p>
        <p>${discount}</p>
      </div>

      <div className="cart-container-checkout_texts_container">
        <p className="cart-container-checkout_texts_container_final">
          Total de tu compra:
        </p>
        <p className="cart-container-checkout_texts_container_final">
          ${total}
        </p>
      </div>

      <div className="deleteButton-container">
        <button className="deleteButton-container-button two">
          <div className="insider"></div>
          Continuar a Pago
        </button>
      </div>
    </>
  );
};

export default CartCheckout;
