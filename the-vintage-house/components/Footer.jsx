import Link from 'next/link';
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.footerDIV}>
                    <div className={styles.row1}>
                <div className={styles.logoTVH}>
                    <Image src="/../public/img/logoTVH.png" height={88} width={93.78} />
                </div>

                    <div className={styles.footerMenu}>
                        <div className={styles.menuColumn}>
                            <div>
                                <span className={styles.menuTitle}>HOME</span>
                            </div>
                        </div>
                        <div className={styles.menuColumn}>
                            <div>
                                <span className={styles.menuTitle}>STORE</span>
                            </div>
                            <div className={styles.subMenu}>
                                <span>CLOTHING</span>
                                <span>ACCESSORIES</span>
                                <span>FOOTWEAR</span>
                                <span>BOOKS AND MAGAZINES</span>
                                <span>ELECTRONICS</span>
                            </div>
                        </div>
                        <div className={styles.menuColumn}>
                            <div>
                                <span className={styles.menuTitle}>INFORMATIONS</span>
                            </div>
                            <div className={styles.subMenu}>
                                <span>AUCTIONS</span>
                                <span>BEST OFFER</span>
                                <span>BUY IT NOW</span>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                    <div className={styles.footerText}>
                        <p>THE VINTAGE HOUSE ©</p>
                    </div>

            </div>
        </>
    );
};

export default Footer;
