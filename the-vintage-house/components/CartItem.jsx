import Image from 'next/image';
import styles from './cartitem.module.css';

const CartItem = ({ item, onRemoveFromCart, onCloseCartItem }) => {

    const itemId = item.item;
    console.log(itemId);

    return (
        <div className={styles.cartItem}>
            <div className={styles.imageContainer}>
                <Image src={item.src_image} height={50} width={50} alt="Item" />
            </div>
            <div className={styles.itemDetails}>

                <p>{item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total Price: {item.totalPrice.toFixed(2)} £</p>

            </div>
        </div>
    );
};

export default CartItem;