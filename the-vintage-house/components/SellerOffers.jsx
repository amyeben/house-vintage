import styles from "./selleroffers.module.css"

const SellerOffers = ( {children, onAccept, onRefuse, customerEmail, date, productName, offernumber, offerquantity, offerPrice}) => {

    return(<>
        <span className={styles.offersTitle}>OFFER</span>
        <div className={styles.selleroffers}>
            <div className={styles.of}>
                <div className={styles.of1}>
                    <span>From: {customerEmail}</span>
                    <span>Date: {date}</span>
                    <span>Product: {productName}</span>
                </div>
                <div className={styles.of2}>
                    <span>Offer n°{offernumber}/5</span>
                    <span>Quantity: {offerquantity}</span>
                    <span>Price: {offerPrice}£</span>
                </div>
            </div>

        </div>
        <div className={styles.btnAR}>
            <button className={styles.buttonAccept} value={"ACCEPT"} onClick={onAccept}>
                I ACCEPT
            </button>
            <button className={styles.buttonRefuse} value={"REFUSE"} onClick={onRefuse}>
                I REFUSE
            </button>
        </div>
    </>);
}
export default SellerOffers;