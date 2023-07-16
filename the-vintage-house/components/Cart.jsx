// components/Cart.js
import CartItem from './CartItem';
import styles from './cart.module.css';

const Cart = ({ cartItems, onRemoveFromCart, onClose, onClearCart }) => {
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
                            key={item.uniqueItemId} // Utilisez uniqueItemId comme clé
                            item={item}
                            onRemoveFromCart={onRemoveFromCart}
                            onCloseCartItem={onCloseCartItem} // Nouvelle fonction onCloseCartItem
                        />
                    ))
                ) : (
                    <p>Your cart is empty.</p>
                )}
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
