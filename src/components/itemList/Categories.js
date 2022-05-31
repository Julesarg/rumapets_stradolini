import { Link } from 'react-router-dom';

const Categories = () =>{
    return (
        <>
        <div className="categories-container animate__animated animate__fadeInDown">
            <Link to='/category/Chicos'>
            <div className="categories-container_small">
                <p>Chicos</p>
            </div>
            </Link>
            <Link to='/category/Medianos'>
            <div className="categories-container_medium">
                <p>Medianos</p>
            </div>
            </Link>
            <Link to='/category/Grandes'>
            <div className="categories-container_large">
                <p>Grandes</p>
            </div>
            </Link>
        </div>
        </>
    )
}

export default Categories;