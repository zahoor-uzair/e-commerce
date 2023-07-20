import { useContext, useEffect, useState } from 'react';
import { Snackbar, Alert } from '@mui/material';
import './product.css'
import { productsData, handleFilter, filterCamera, filterheadphone, filterBelow30 } from './utils';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartcontext';
const ProductList = () => {
    const { addToCart } = useContext(CartContext)
    const [open, setOpen] = useState(false);
    const [filter, setFilter] = useState([]);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
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

                            <Link to={`/product/${product.id}`}> <button className="add-to-cart-button bg-btn" >View Details</button></Link>
                            <button className="add-to-cart-button" onClick={async () => {
                                await addToCart(product)
                                setOpen(true);
                            }

                            }>Add to Cart</button>
                        </div>
                    </div>
                ))}
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" variant='filled' sx={{ width: '100%', padding: 1 }}>
                        Product Added to Cart!
                        To See click Cart
                    </Alert>
                </Snackbar>

            </div >
        </>
    );
};

export default ProductList