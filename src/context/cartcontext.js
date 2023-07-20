import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

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
        
    };

    const removeFromCart = (product) => {
        setCartItems(cartItems.filter((item) => item.product.id !== product.id));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
