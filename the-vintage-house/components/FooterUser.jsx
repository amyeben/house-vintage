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
                            <a href={"/posts/customer"}>
                                <Image src="/../public/img/logoTVH.png" height={88} width={93.78} alt={"logo"}/></a>
                        </div>

                        <div className={styles.footerMenu}>
                            <div className={styles.menuColumn}>
                                <div>
                                    <span className={styles.menuTitle}><a href={"/posts/customer"}>HOME</a></span>
                                </div>
                            </div>
                            <div className={styles.menuColumn}>
                                <div>
                                    <span className={styles.menuTitle}>
                                        <a href={"/posts/customer/store"}>STORE</a></span>
                                </div>
                                <div className={styles.subMenu}>
                                    <a href={"/posts/customer/store#clothing"}>
                                        <span>CLOTHING</span></a>
                                    <a href={"/posts/customer/store#accessories"}>
                                        <span>ACCESSORIES</span></a>
                                    <a href={"/posts/customer/store#footwear"}>
                                        <span>FOOTWEAR</span></a>
                                    <a href={"/posts/customer/store#books"}>
                                        <span>BOOKS AND MAGAZINES</span></a>
                                    <a href={"/posts/customer/store#electronics"}>
                                        <span>ELECTRONICS</span></a>
                                </div>
                            </div>
                            <div className={styles.menuColumn}>
                                <div>
                                    <span className={styles.menuTitle}>
                                        <a href={"/posts/customer/informations"}>INFORMATIONS</a></span>
                                </div>
                                <div className={styles.subMenu}>
                                    <a href={"/posts/customer/informations#auctions"}>
                                        <span>AUCTIONS</span></a>
                                    <a href={"/posts/customer/informations#bestoffer"}>
                                        <span>BEST OFFER</span></a>
                                    <a href={"/posts/customer/informations#buyitnow"}>
                                        <span>BUY IT NOW</span></a>
                                </div>
                            </div>
                            <div className={styles.menuColumn}>
                                <div>
                                    <a href={"/posts/customer/myaccount"}>
                                        <span className={styles.menuTitle}>MY ACCOUNT</span></a>
                                </div>
                                <div className={styles.subMenu}>
                                    <a href={"/posts/customer/myaccount"}><span>ACCOUNT INFORMATION</span></a>
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
