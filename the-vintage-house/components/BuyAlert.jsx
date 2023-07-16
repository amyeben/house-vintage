// import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import styles from './buyalert.module.css';
import {useEffect, useState} from "react";

const BuyAlert = ({ itemId, onClose, addToCart }) => {
    const [itemDetails, setItemDetails] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleGetItemDetails = async () => {
        try {
            const response = await axios.post('http://localhost:8888/get_items_details_buy.php', {
                item_id: itemId,
            });

            if (response.status === 200) {
                setItemDetails(response.data);
            } else {
                console.error('Failed to get item details.');
            }
        } catch (error) {
            console.error('An error occurred while fetching item details:', error);
        }
    };

    const handleAddToCart = () => {
        addToCart({ ...itemDetails, quantity }); // Ajouter l'article au panier avec la quantité sélectionnée
        onClose();
    };

    const handleMakeAnOffer = () => {
        // TODO: Gérer l'offre
        console.log('Item offer :', itemDetails);
        onClose();
    };

    // Calculate the total price based on the quantity
    useEffect(() => {
        if (itemDetails) {
            const price = parseFloat(itemDetails.price_items);
            const totalPrice = price * quantity;
            setTotalPrice(totalPrice);
        }
    }, [quantity, itemDetails]);

    // Fetch item details when the component mounts
    useEffect(() => {
        handleGetItemDetails();
    }, []);

    return (
        <div className={styles.overlay}>
            <div className={styles.formWrapper}>
                {itemDetails && (
                    <>
                        <div className={styles.imageContainer}>
                            <Image src={itemDetails.src_image} height={180} width={180} alt="cards" />
                        </div>
                        <div className={styles.infoContainer}>
                            <h2 className={styles.alertTitle}>{itemDetails.name}</h2>
                            <p className={styles.alertText}>{itemDetails.description}</p>
                            <p>Price: {itemDetails.price_items} £</p>
                            <div className={styles.quantityInput}>
                                <label>Quantity:</label>
                                <input
                                    type="number"
                                    min="1"
                                    value={quantity}
                                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                                />
                            </div>
                            <p className={styles.totalPrice}>Total Price: {totalPrice.toFixed(2)} £</p>
                            <div className={'btnMC'}>
                                <button className={styles.alertButton} onClick={handleMakeAnOffer}>
                                    Make an Offer
                                </button>
                                <button className={styles.alertButton} onClick={handleAddToCart}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </>
                )}
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
            </div>
        </div>
    );
};

export default BuyAlert;
