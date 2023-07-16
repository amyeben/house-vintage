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
                    <a href={"/"}>
                        <Image src="/../public/img/logoTVH.png" height={88} width={93.78} alt={"logo"}/>
                    </a>
                </div>

                    <div className={styles.footerMenu}>
                        <div className={styles.menuColumn}>
                            <div>
                                <span className={styles.menuTitle}>
                                    <a href={"/"}>HOME</a></span>
                            </div>
                        </div>
                        <div className={styles.menuColumn}>
                            <div>
                                <span className={styles.menuTitle}>STORE</span>
                            </div>
                            <div className={styles.subMenu}>
                                <a href={"/stores#clothing"}>
                                    <span>CLOTHING</span></a>
                                <a href={"/stores#accessories"}>
                                    <span>ACCESSORIES</span></a>
                                <a href={"/stores#footwear"}>
                                    <span>FOOTWEAR</span></a>
                                <a href={"/stores#books"}>
                                    <span>BOOKS AND MAGAZINES</span></a>
                                <a href={"/stores#electronics"}>
                                    <span>ELECTRONICS</span></a>
                            </div>
                        </div>
                        <div className={styles.menuColumn}>
                            <div>
                                <span className={styles.menuTitle}><a href={"/informations"}>INFORMATIONS</a></span>
                            </div>
                            <div className={styles.subMenu}>
                                <a href={"/informations#auctions"}>
                                    <span>AUCTIONS</span></a>
                                <a href={"/informations#bestoffer"}>
                                    <span>BEST OFFER</span></a>
                                <a href={"/informations#buyitnow"}>
                                    <span>BUY IT NOW</span></a>
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
