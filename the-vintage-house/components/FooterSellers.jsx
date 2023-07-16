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
                            <a href={"/posts/sellers"}>
                                <Image src="/../public/img/logoTVH.png" height={88} width={93.78} alt={"logo"}/>
                            </a>
                        </div>

                        <div className={styles.footerMenu}>
                            <div className={styles.menuColumn}>
                                <div>
                                    <span className={styles.menuTitle}><a href={"/posts/sellers"}>HOME</a></span>
                                </div>
                            </div>
                            <div className={styles.menuColumn}>
                                <div>
                                    <span className={styles.menuTitle}><a href={"/posts/sellers/products"}>MY PRODUCTS</a></span>
                                </div>

                            </div>
                            <div className={styles.menuColumn}>
                                <div>
                                    <span className={styles.menuTitle}><a href={"/posts/sellers/purchasing"}>PURCHASING</a></span>
                                </div>
                                <div className={styles.subMenu}>
                                    <a href={"/posts/sellers/purchasing/auctions"}>
                                        <span>AUCTIONS</span></a>
                                    <a href={"/posts/sellers/purchasing/offers"}>
                                        <span>OFFERS</span></a>
                                </div>
                            </div>
                            <div className={styles.menuColumn}>
                                <div>
                                    <span className={styles.menuTitle}>MY ACCOUNT</span>
                                </div>
                                <div className={styles.subMenu}>
                                    <a href={"/posts/sellers/myaccount"}>
                                        <span>ACCOUNT INFORMATION</span></a>
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
