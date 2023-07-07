import Link from 'next/link';
import styles from './footer.module.css';
import Image from 'next/image';

const FooterUser = () => {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.footerDIV}>
                    <div className={styles.row1}>
                        <div className={styles.logoTVH}>
                            <Image src="/../public/img/logoTVH.png" height={88} width={93.78} alt={"logo"}/>
                        </div>

                        <div className={styles.footerMenu}>
                            <div className={styles.menuColumn}>
                                <div>
                                    <span className={styles.menuTitle}>HOME</span>
                                </div>
                            </div>
                            <div className={styles.menuColumn}>
                                <div>
                                    <span className={styles.menuTitle}>MY PRODUCT</span>
                                </div>

                            </div>
                            <div className={styles.menuColumn}>
                                <div>
                                    <span className={styles.menuTitle}>PURCHASING</span>
                                </div>
                                <div className={styles.subMenu}>
                                    <span>AUCTIONS</span>
                                    <span>OFFERS</span>
                                </div>
                            </div>
                            <div className={styles.menuColumn}>
                                <div>
                                    <span className={styles.menuTitle}>MY ACCOUNT</span>
                                </div>
                                <div className={styles.subMenu}>
                                    <span>ACCOUNT INFORMATION</span>
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

export default FooterUser;
