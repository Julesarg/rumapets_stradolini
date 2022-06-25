import toast from "react-hot-toast";

const ToastOrderLoading = () =>
  toast(() => (
    <div className="toast-inner">
      <div className="toast-inner_image_container">
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h4>finalizando compra</h4>
    </div>
    </div>
  ));

export default ToastOrderLoading;
