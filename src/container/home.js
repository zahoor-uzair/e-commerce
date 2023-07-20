import React from 'react'
import { useState } from 'react';
import ProductList from '../components/products';
import Cart from '../components/cart';
export const Home = () => {

    const [show, setShow] = useState(false);

    return (
        <>  <button className='cart-button' onClick={() => setShow(!show)}>{show ? 'Back' : 'Cart'}</button>
            {show ?
                <Cart /> :
                <ProductList />
            }</>
    )
}
