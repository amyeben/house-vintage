import {useEffect, useState} from "react";
import styles from "./auctionaddform.module.css";
import axios from "axios";

const AuctionAddForm = ({ onClose, itemId, seller_id, auctionSuccess }) => {
    const [offer, setOffer] = useState(0);
    const [duration, setDuration] = useState(5); // Default duration is set to 5 minutes
    const [countdown, setCountdown] = useState(duration * 60);

    const formatCountdown = (countdown) => {
        const minutes = Math.floor(countdown / 60);
        const seconds = countdown % 60;
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleNewAuction = () => {
        console.log("NEW AUCTION");
        console.log("Offer:", offer);
        console.log("Countdown:", countdown);
        //console.log("userId: "+ userId)

        const data = {
            itemId: itemId,
            userId: seller_id,
            maxPrice: offer,
            duration: duration, // Duration in minutes
        };

        axios
            .post("http://localhost:8888/create_auction.php", data)
            .then((response) => {
                console.log("Auction created successfully!");
                //onClose();

                // You can also show a success message to the seller
            })
            .catch((error) => {
                console.error("Error creating auction:", error);
                // Handle the error, e.g., show an error message
            });
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
                        <h1 className={styles.h1}>CREATE AUCTION</h1>
                        <label className={styles.label}>Choose a maximum price: </label>
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
                        <label className={styles.label}>Choose the duration (in minutes): </label>
                        <div className={styles.inputContainer}>
                            <input
                                type="number"
                                value={duration}
                                name="duration"
                                className={styles.input}
                                onChange={(e) => setDuration(e.target.value)}
                                min={1}
                            />
                        </div>
                        <div className={styles.countdown}>
                            {countdown > 0 ? (
                                <>
                                    <span>Auction ends in:</span>
                                    <span>{formatCountdown(countdown)}</span>
                                </>
                            ) : (
                                <span>Auction has ended!</span>
                            )}
                        </div>
                        <button className={styles.offerButton} onClick={handleNewAuction}>
                            NEW AUCTION
                        </button>
                        {auctionSuccess && (
                            <p className={styles.successMessage}>Auction created successfully!</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuctionAddForm;
