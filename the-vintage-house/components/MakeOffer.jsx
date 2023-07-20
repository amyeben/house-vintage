import { useState } from "react";
import styles from "./makeoffer.module.css";
import axios from "axios";

const MakeOffer = ({ onClose, itemId, handleMakeOffer, offerSuccess, offerLimit }) => {
    const [offer, setOffer] = useState(0);

    const handleOfferSubmit = () => {
        handleMakeOffer(itemId, offer); // Call the handleMakeOffer function with the itemId and offer as parameters
        onClose();
    };

    return (
        <>
            <div className={styles.overlay}>
                <div className={styles.formWrapper}>
                    <div className={styles.closeButtonWrapper}>
                        <button className={styles.closeButton} onClick={onClose}>
                            &times;
                        </button>
                    </div>
                    <div className={styles.flex}>
                        <h1 className={styles.h1}>MAKE AN OFFER</h1>
                        <div className={styles.inputContainer}>
                            <input
                                type="number"
                                value={offer}
                                name="offer"
                                className={styles.input}
                                onChange={(e) => setOffer(e.target.value)}
                                min={0}
                            />
                            <label className={styles.label}> £</label>
                        </div>
                        <button className={styles.offerButton} onClick={handleOfferSubmit}>
                            MAKE AN OFFER
                        </button>
                        {offerSuccess && <p className={styles.successMessage}>Offer submitted successfully!</p>}
                        {offerLimit && <p className={styles.successMessage}>You have reached the offer limit for this product!</p>}

                    </div>
                </div>
            </div>
        </>
    );
};

export default MakeOffer;
