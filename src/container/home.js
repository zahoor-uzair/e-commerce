import React from 'react'
import { useState } from 'react';
import ProductList from '../components/products';
import Cart from '../components/cart';
export const Home = () => {
    const [cartItems, setCartItems] = useState([]);
    const [show, setShow] = useState(false);

    const addToCart = (product) => {
        const existingCartItem = cartItems.find((item) => item.product.id === product.id);

        if (existingCartItem) {
            setCartItems(
                cartItems.map((item) =>
                    item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        } else {
            setCartItems([...cartItems, { product, quantity: 1 }]);
        }
        // alert(`${product.name} is set to cart`)
        setShow(true)
    };

    const removeFromCart = (product) => {
        setCartItems(cartItems.filter((item) => item.product.id !== product.id));
    };

    return (
        <>  <button className='cart-button' onClick={() => setShow(!show)}>{show ? 'Back' : 'Cart'}</button>
            {show ?
                <Cart cartItems={cartItems} removeFromCart={removeFromCart} /> :
                <ProductList addToCart={addToCart} />
            }</>
    )
}
