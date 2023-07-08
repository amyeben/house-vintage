import styles from "./selleroffers.module.css"

const SellerOffers = (children) => {

    return(<>
        <span className={styles.offersTitle}>OFFER</span>
        <div className={styles.selleroffers}>
            <div className={styles.of}>
                <div className={styles.of1}>
                    <span>From: {children.customerEmail}</span>
                    <span>Date: {children.date}</span>
                    <span>Product: {children.productName}</span>
                </div>
                <div className={styles.of2}>
                    <span>Offer n°{children.offernumber}/5</span>
                    <span>Quantity: {children.offerquantity}</span>
                    <span>Price: {children.offerPrice}</span>
                </div>
            </div>

        </div>
        <div className={styles.btnAR}>
            <button className={styles.buttonAccept} value={"ACCEPT"}>
                I ACCEPT
            </button>
            <button className={styles.buttonRefuse} value={"REFUSE"}>
                I REFUSE
            </button>
        </div>
    </>);
}
export default SellerOffers;