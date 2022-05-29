import { Link } from 'react-router-dom';

const Categories = () =>{
    return (
        <>
        <div className="categories-container">
            <Link to='/category/Small'>
            <div className="categories-container_small">
                <p>Chicos</p>
            </div>
            </Link>
            <Link to='/category/Medium'>
            <div className="categories-container_medium">
                <p>Medianos</p>
            </div>
            </Link>
            <Link to='/category/Large'>
            <div className="categories-container_large">
                <p>Grandes</p>
            </div>
            </Link>
        </div>
        </>
    )
}

export default Categories;