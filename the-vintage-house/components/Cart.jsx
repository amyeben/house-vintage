import React, { useState } from "react";
import axios from "axios";
import CartItem from "./CartItem";
import styles from "./cart.module.css";

const Cart = ({ cartItems, onRemoveFromCart, onClose, onClearCart }) => {
    // Calculate the total price of all items in the cart
    const totalPrice = cartItems.reduce((total, item) => total + item.totalPrice, 0);
    const [showCheckout, setShowCheckout] = useState(false);
    const [promoCode, setPromoCode] = useState("");
    const [cardInfo, setCardInfo] = useState({
        cardNumber: "",
        cardHolder: "",
        expirationDate: "",
        cvv: "",
    });
    const user_id = sessionStorage.getItem('user_id');

    const onCloseCartItem = (uniqueItemId) => {
        onRemoveFromCart(uniqueItemId);
    };

    const handlePromoCodeChange = (e) => {
        setPromoCode(e.target.value);
    };

    const handleCardInfoChange = (e) => {
        const { name, value } = e.target;
        setCardInfo((prevCardInfo) => ({
            ...prevCardInfo,
            [name]: value,
        }));
    };

    const handleBuyNow = () => {
        setShowCheckout(true);
    };

    const handleBuy = async () => {
        // Send an email to the backend API with the order details using Axios
        try {

            const response = await axios.post("http://localhost:8888/sendEmail.php", {

                cartItems,
                totalPrice,
                cardInfo,
                user_id
            });

            onClearCart();
            onClose();

            if (response.status === 200) {
                // Email sent successfully
                alert('Order placed successfully! An email will be sent to ebenamy12@yahoo.fr.');
            } else {
                // Handle error in sending email
                alert('An error occurred while placing the order. Please try again later.');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred while placing the order. Please try again later.');
        }
    };

    return (
        <div className={styles.cartOverlay}>
            <div className={styles.cartContent}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <h2 className={styles.cartTitle}>Cart</h2>

                <div className={styles.flex}>
                    <div className={styles.carttems}>
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
                    </div>
                    <div>
                        {showCheckout && (
                            <>
                                <div className={styles.promoCodeSection}>
                                    <label htmlFor="promoCode">Enter Promo Code:</label>
                                    <input
                                        type="text"
                                        id="promoCode"
                                        value={promoCode}
                                        onChange={handlePromoCodeChange}
                                        placeholder="Promo Code"
                                    />
                                </div>

                                <div className={styles.cardInfoSection}>
                                    <label htmlFor="cardNumber">Card Number:</label>
                                    <input
                                        type="password"
                                        id="cardNumber"
                                        name="cardNumber"
                                        value={cardInfo.cardNumber}
                                        onChange={handleCardInfoChange}
                                        placeholder="Enter card number"
                                    />

                                    <label htmlFor="cardHolder">Card Holder:</label>
                                    <input
                                        type="text"
                                        id="cardHolder"
                                        name="cardHolder"
                                        value={cardInfo.cardHolder}
                                        onChange={handleCardInfoChange}
                                        placeholder="Enter card holder name"
                                    />

                                    <label htmlFor="expirationDate">Expiration Date:</label>
                                    <input
                                        type="password"
                                        id="expirationDate"
                                        name="expirationDate"
                                        value={cardInfo.expirationDate}
                                        onChange={handleCardInfoChange}
                                        placeholder="MM/YY"
                                    />

                                    <label htmlFor="password">CVV:</label>
                                    <input
                                        type="text"
                                        id="cvv"
                                        name="cvv"
                                        value={cardInfo.cvv}
                                        onChange={handleCardInfoChange}
                                        placeholder="Enter CVV"
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <div className={styles.cartButtons}>
                    <button className={styles.cartButton} onClick={onClearCart}>
                        Clear Cart
                    </button>
                    {showCheckout ? (
                        <>
                            <button className={styles.cartButtonY} onClick={handleBuy}>
                                Buy
                            </button>
                        </>
                    ) : (
                        <button className={styles.cartButtonY} onClick={handleBuyNow}>
                            Buy It Now !
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
