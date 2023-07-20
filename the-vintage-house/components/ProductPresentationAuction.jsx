import Link from 'next/link';
import styles from './productpresentation.module.css';
import Image from "next/image";

const ProductPresentationAuction = ({srcImage, id, articleName, articlePrice, action}) => {

    const getIdProductToCart= () => {
        console.log(id);
    };



    return (
        <>
            <div className={styles.cards}>
                <Image
                    src={srcImage}
                    id={id}
                    height={100}
                    width={100}
                    alt={"cards"}

                />
                <span className={"articleName"}> {articleName}</span>
                <span className={"articlePrice"}>Highest Offer: {articlePrice}</span>
                <button className={styles.buttonBuy} value={"MAKE AN OFFER"} onClick={action}>MAKE AN OFFER</button>
            </div>
        </>
    );
};

export default ProductPresentationAuction;