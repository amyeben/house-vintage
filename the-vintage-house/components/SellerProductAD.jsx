import { useEffect } from "react";
import styles from "./sellerproductad.module.css";
import Image from "next/image";

const SellerProductAD = (param) => {


    return (
        <div className={styles.cards}>
            <div className={styles.imgProductStore}>
            <Image
                src={param.srcImage}
                id={param.id}
                height={150}
                width={150}
                alt={"cards"}
            />
            </div>
            <div className={styles.informationsProduct}>
                <span className={"productName"}><strong>Title:</strong>  {param.productName}</span>
                <span className={"productCategorie"}><strong>Categorie:</strong> {param.productCategorie}</span>
                <span className={"productPrice"}><strong>Price:</strong> {param.productPrice}</span>
                <span className={"productDescription"}><strong>Description:</strong> {param.productDescription}</span>
                <span className={"productAuction"}><strong>Auction:</strong> {param.productAuction ? param.productAuction : "No"}</span>
                <div className={styles.btnsProducts}>
                    <button className={"buttonMakeOffer"} value={"DELETE"} onClick={param.onDelete}>
                        DELETE
                    </button>

                </div>

            </div>
        </div>
    );
};

export default SellerProductAD;
