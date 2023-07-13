import './cart.css'

const Cart = ({ cartItems, removeFromCart }) => {
    console.log(cartItems)
    if (cartItems.length === 0) {
        return <>
            <h2>No Item in the Cart</h2>
        </>
    }
    return (
        <div>
            {cartItems.map((cartItem) => (
                <div className="cart-card">
                    <img className="product-image" src={cartItem.product.image} alt={cartItem.product.name} />
                    <div className="product-details">
                        <h3 className="product-name">{cartItem.product.name}</h3>
                        <p className="product-price">${cartItem.product.price}</p>
                        <div className="quantity-section">
                            <span className="product-quantity">Quantity: {cartItem.quantity}</span>
                            <button className="quantity-button" onClick={() => removeFromCart(cartItem.product)}>
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Cart

