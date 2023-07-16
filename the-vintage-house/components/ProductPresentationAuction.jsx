import Link from 'next/link';
import styles from './productpresentation.module.css';
import Image from "next/image";

const ProductPresentationAuction = (children) => {

    const getIdProductToCart= () => {
        console.log(children.id);
    };



    return (
        <>
            <div className={styles.cards}>
                <Image
                    src={children.srcImage}
                    id={children.id}
                    height={100}
                    width={100}
                    alt={"cards"}

                />
                <span className={"articleName"}> {children.articleName}</span>
                <span className={"articlePrice"}>Last Offer: {children.articlePrice}</span>
                <button className={styles.buttonBuy} value={"MAKE AN OFFER"} onClick={children.action}>MAKE AN OFFER</button>
            </div>
        </>
    );
};

export default ProductPresentationAuction;