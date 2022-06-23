import { Link } from "react-router-dom";

const CartBackToHome = () => {
  return (
    <>
      <div className="deleteButton-container">
        <button className="deleteButton-container-button three">
          <div className="insider"></div>
          <Link to="../">Seguir Comprando</Link>
        </button>
      </div>
    </>
  );
};

export default CartBackToHome;
