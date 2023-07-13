import { useEffect, useState } from 'react';
import './product.css'
import { productsData, handleFilter, filterCamera, filterheadphone } from './utils';
const ProductList = ({ addToCart }) => {
    const [filter, setFilter] = useState([]);
    useEffect(() => {
        setFilter(productsData)
    }, []);
    return (
        <>
            <input className='search' type='text' placeholder='Search by Name' onChange={(e) => handleFilter(e, setFilter, productsData)} />
            <div className='categories'>
                <button className='filter-button' onClick={() => setFilter(productsData)}>All</button>
                <button className='filter-button' onClick={() => filterCamera(setFilter)}>Camera</button>
                <button className='filter-button' onClick={() => filterheadphone(setFilter)}>Headphone</button>
            </div>
            <div className='product-container'>
                {filter.map((product) => (
                    <div className="product-card">
                        <img className="product-image" src={product.image} alt={product.name} />
                        <div className="product-details">
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-price">${product.price}</p>
                            <button className="add-to-cart-button" onClick={() => addToCart(product)}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProductList