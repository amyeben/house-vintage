import React, { useState } from "react";
import styles from "./additemform.module.css"; // Import CSS module for styling

const AddSellersForm = ({ onAddSeller, onClose }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Create a new seller object with form values
        const newSeller = {
            firstName,
            lastName,
            address,
            username,
            password,
        };
        // Call the onAddSeller function with the new seller
        onAddSeller(newSeller);
        // Clear the form fields
        setFirstName("");
        setLastName("");
        setAddress("");
        setUsername("");
        setPassword("");
    };

    return (
        <div className={styles.formWrapper}>
            <div className={styles.overlay} onClick={onClose}></div>
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit}>
                    <button className={styles.closeButton} onClick={onClose}>
                        X
                    </button>
                    <h2>Add a Seller</h2>
                    <div className={styles.formGroup}>
                        <label htmlFor="firstName">First Name: </label>
                        <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="lastName">Last Name: </label>
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="address">Address: </label>
                        <input
                            type="text"
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="username">Username (Email): </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password: </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className={styles.buttonAdd} type="submit">ADD</button>
                </form>
            </div>
        </div>
    );
};

export default AddSellersForm;
