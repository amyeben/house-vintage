import CartItem from './CartItem';
import styles from './cart.module.css';

const Cart = ({ cartItems, onRemoveFromCart, onClose, onClearCart }) => {
    // Calculate the total price of all items in the cart
    const totalPrice = cartItems.reduce((total, item) => total + item.totalPrice, 0);

    const onCloseCartItem = (uniqueItemId) => {
        onRemoveFromCart(uniqueItemId);
    };

    return (
        <div className={styles.cartOverlay}>
            <div className={styles.cartContent}>
                <h2 className={styles.cartTitle}>Cart</h2>

                {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <CartItem
                            key={item.uniqueItemId}
                            item={item}
                            onRemoveFromCart={onRemoveFromCart}
                            onCloseCartItem={onCloseCartItem}
                        />
                    ))
                ) : (
                    <p>Your cart is empty.</p>
                )}

                <p>Total Price: {totalPrice.toFixed(2)} £</p> {/* Display the total price */}

                <div className={styles.cartButtons}>
                    <button className={styles.cartButton} onClick={onClose}>
                        Close
                    </button>
                    <button className={styles.cartButton} onClick={onClearCart}>
                        Clear Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
