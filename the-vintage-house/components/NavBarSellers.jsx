import Link from 'next/link';
import styles from './navbar.module.css';
import Image from 'next/image';
import { useEffect } from 'react';

const NavbarSellers = () => {
    useEffect(() => {
        const informationsSpan = document.querySelector(`.${styles.informations}`);
        const subMenu2 = document.querySelector(`.${styles.subMenu2}`);

        if (informationsSpan && subMenu2) {
            let timeout;



            informationsSpan.addEventListener('mouseenter', () => {
                clearTimeout(timeout);
                //subMenu.style.display = 'none';
                subMenu2.style.display = 'flex';
            });

            subMenu2.addEventListener('mouseenter', () => {
                clearTimeout(timeout);
            });

            subMenu2.addEventListener('mouseleave', () => {
                timeout = setTimeout(() => {
                    subMenu2.style.display = 'none';
                }, (500));
            });
        }
    }, []);

    return (
        <>
            <link href="https://fonts.googleapis.com/css?family=Apple+SD+Gothic+Neo&display=swap" rel="stylesheet" />

            <div className={styles.nav}>
                <div className={styles.logoTVH}>
                    <Image src="/../public/img/logoTVH.png" height={88} width={93.78} alt={"logo"}/>
                </div>
                <div className={styles.spanNav}>
                    <div>
                        <span>HOME</span>
                    </div>
                    <div>
                        <span>MY PRODUCT</span>
                    </div>
                    <div className={styles.informations}>
                        <span>PURCHASING</span>
                    </div>
                    <div className={styles.subMenu2}>
                        <span>AUCTIONS</span>
                        <span>OFFERS</span>
                    </div>
                    <div>
                        <span>MY ACCOUNT</span>
                    </div>
                </div>
                <div className={styles.textArea}>
                    <textarea cols={5} rows={2} defaultValue={"SEARCH..."}></textarea>
                    <Image src="/../public/img/search.png" height={24} width={24} alt={"search"}/>
                </div>

            </div>
        </>
    );
};

export default NavbarSellers;
