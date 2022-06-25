import toast from "react-hot-toast";

const ToastOrderLoadingOk = (param) =>
  toast(() => (
    <div className="toast-inner">
        <div className="toast-inner_image_container">
            <img src="../imgs/cart/purchaseok.gif" alt="cat gif purchase ok" />
        </div>
      <p>Gracias por tu compra! Tu numero de orden es:</p>
      <h3>{param}</h3>
    </div>
  ));

export default ToastOrderLoadingOk;
