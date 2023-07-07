import React from 'react';
import styles from  './summerdiscount.module.css';

const SummerDiscount = () => {
    const discountCode = 'SUMMER20'; // Code de réduction pour l'été
    const discountPercentage = 20; // Pourcentage de réduction

    return (
        <div className={styles.summerDiscount}>
            <h2>Summer Sale!</h2>
            <p>Get {discountPercentage}% off with code <strong>{discountCode}</strong>.</p>
            <p>Don't miss out on our special summer discount. Shop now and save!</p>
        </div>
    );
};

export default SummerDiscount;
