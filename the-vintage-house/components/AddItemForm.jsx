import React, { useState } from "react";
import styles from "./additemform.module.css"; // Import CSS module for styling

const AddItemForm = ({ onAddItem, onClose }) => {
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Create a new item object with form values
        const newItem = {
            category,
            image,
            description,
            name,
            price,
        };
        // Call the onAddItem function with the new item
        onAddItem(newItem);
        // Clear the form fields
        setCategory("");
        setImage("");
        setDescription("");
        setName("");
        setPrice("");
    };

    return (
        <div className={styles.formWrapper}>
            <div className={styles.overlay} onClick={onClose}></div>
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit}>
                <button className={styles.closeButton} onClick={onClose}>
                    X
                </button>
                <h2>Add an Item</h2>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="description">Description: </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="price">Price: </label>
                    <input
                        type="text"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="category">Category: </label>
                        <select
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">Select category</option>
                            <option value="clothing">Clothing</option>
                            <option value="accessories">Accessories</option>
                            <option value="footwear">Footwear</option>
                            <option value="books">Books</option>
                            <option value="electronics">Electronics</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="image">Image: </label>
                        <input
                            type="text"
                            id="image"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </div>



                    <button className={styles.buttonAdd} type="submit">ADD</button>
                </form>
            </div>
        </div>
    );
};

export default AddItemForm;