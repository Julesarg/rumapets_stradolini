import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <div className="categories-container animate__animated animate__fadeInDown">
        <Link to="/category/Chicos">
          <button className="categories-container_small">
            <p>Chicos</p>
          </button>
        </Link>
        <Link to="/category/Medianos">
          <button className="categories-container_medium">
            <p>Medianos</p>
          </button>
        </Link>
        <Link to="/category/Grandes">
          <button className="categories-container_large">
            <p>Grandes</p>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Categories;
