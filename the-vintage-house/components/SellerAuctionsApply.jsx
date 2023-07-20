import { useEffect } from "react";
import styles from "./sellerproductad.module.css";
import Image from "next/image";

const SellerAuctionsApply = ({ onApply, srcImage, productName, id, productPrice, productDescription, productAuction}) => {


    return (
        <div className={styles.cards}>
            <div className={styles.imgProduct}>
                <Image
                    src={srcImage}
                    id={id}
                    height={100}
                    width={100}
                    alt={"cards"}
                />
            </div>
            <div className={styles.informationsProduct}>
                <span className={"productName"}><strong>Title:</strong>  {productName}</span>
                <span className={"productPrice"}><strong>Price:</strong> {productPrice}</span>
                <span className={"productDescription"}><strong>Description:</strong> {productDescription}</span>
                <span className={"productAuction"}><strong>Auction:</strong> {productAuction ? productAuction : "No"}</span>
                <div className={styles.btnsProducts}>
                    <button className={"buttonMakeOffer"} onClick={onApply}>
                        APPLY
                    </button>

                </div>

            </div>
        </div>
    );
};

export default SellerAuctionsApply;
