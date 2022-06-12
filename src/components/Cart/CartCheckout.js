const CartCheckout = ({ products, taxes, discount, total }) => {
  return (
    <>
      <div className="cart-container-checkout_title">
        <h5>DETALLE DE COMPRA</h5>
      </div>
      <div className="cart-container-checkout_title">
        <h5> Subtotal de productos ${products}</h5>
      </div>
      <div className="cart-container-checkout_title">
        <h5>Costos por embalaje: ${taxes}</h5>
      </div>
      <div className="cart-container-checkout_title">
        <h5>Descuento HOTSALE: ${discount}</h5>
      </div>
      <div className="cart-container-checkout_title">
        <h5>Total de tu compra: ${total}</h5>
      </div>
      <button>CHECKOUT</button>
    </>
  );
};

export default CartCheckout;
