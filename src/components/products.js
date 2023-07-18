import { useEffect, useState } from 'react';
import './product.css'
import { productsData, handleFilter, filterCamera, filterheadphone, filterBelow30 } from './utils';
import { Link } from 'react-router-dom';
const ProductList = ({ addToCart }) => {
    const [filter, setFilter] = useState([]);
    useEffect(() => {
        setFilter(productsData)
    }, []);
    return (
        <>
            <input className='search' type='text' placeholder='Search by Name or Category' onChange={(e) => handleFilter(e, setFilter, productsData)} />
            <div className='categories'>
                <button className='filter-button' onClick={() => setFilter(productsData)}>All</button>
                <button className='filter-button' onClick={() => filterCamera(setFilter)}>Camera</button>
                <button className='filter-button' onClick={() => filterheadphone(setFilter)}>Headphone</button>
                <button className='filter-button' onClick={() => filterBelow30(setFilter)}>Below $20</button>
            </div>
            <div className='product-container'>
                {filter.map((product) => (
                    <div key={product.id} className="product-card">
                        <img className="product-image" src={product.image} alt={product.name} />
                        <div className="product-details">
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-price">${product.price}</p>
                            <button className="add-to-cart-button" onClick={() => addToCart(product)}>Add to Cart</button>
                            <Link to={`/product/${product.id}`}> <button className="add-to-cart-button bg-btn" >View Details</button></Link>
                        </div>
                    </div>
                ))}
            </div >
        </>
    );
};

export default ProductList