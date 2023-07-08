import Link from 'next/link';
import styles from './navbar.module.css';
import Image from 'next/image';
import { useEffect } from 'react';

const NavBar = () => {
    useEffect(() => {
        const storeSpan = document.querySelector(`.${styles.store}`);
        const informationsSpan = document.querySelector(`.${styles.informations}`);
        const subMenu = document.querySelector(`.${styles.subMenu}`);
        const subMenu2 = document.querySelector(`.${styles.subMenu2}`);

        if (storeSpan && informationsSpan && subMenu && subMenu2) {
            let timeout;

            storeSpan.addEventListener('mouseenter', () => {
                clearTimeout(timeout);
                subMenu.style.display = 'flex';
                subMenu2.style.display = 'none';
            });

            informationsSpan.addEventListener('mouseenter', () => {
                clearTimeout(timeout);
                subMenu.style.display = 'none';
                subMenu2.style.display = 'flex';
            });

            storeSpan.addEventListener('mouseleave', () => {
                timeout = setTimeout(() => {
                    subMenu.style.display = 'none';
                }, 500);
            });

            informationsSpan.addEventListener('mouseleave', () => {
                timeout = setTimeout(() => {
                    subMenu2.style.display = 'none';
                }, 500);
            });

            subMenu.addEventListener('mouseenter', () => {
                clearTimeout(timeout);
            });

            subMenu.addEventListener('mouseleave', () => {
                timeout = setTimeout(() => {
                    subMenu.style.display = 'none';
                }, 500);
            });

            subMenu2.addEventListener('mouseenter', () => {
                clearTimeout(timeout);
            });

            subMenu2.addEventListener('mouseleave', () => {
                timeout = setTimeout(() => {
                    subMenu2.style.display = 'none';
                }, 500);
            });
        }
    }, []);

    return (
        <>

            <div className={styles.nav}>
                <div className={styles.logoTVH}>
                    <Image src="/../public/img/logoTVH.png" height={88} width={93.78} alt={"logo"}/>
                </div>
                <div className={styles.spanNav}>
                    <div>
                        <span>HOME</span>
                    </div>
                    <div className={styles.store}>
                        <span>STORE</span>
                    </div>
                    <div className={styles.subMenu}>
                        <span>CLOTHING</span>
                        <span>ACCESSORIES</span>
                        <span>FOOTWEAR</span>
                        <span>BOOKS AND MAGAZINES</span>
                        <span>ELECTRONICS</span>
                    </div>
                    <div className={styles.informations}>
                        <span>INFORMATIONS</span>
                    </div>
                    <div className={styles.subMenu2}>
                        <span>AUCTIONS</span>
                        <span>BEST OFFER</span>
                        <span>BUY IT NOW</span>
                    </div>
                </div>
                <div className={styles.textArea}>
                    <textarea cols={5} rows={2} defaultValue={"SEARCH..."}></textarea>
                    <Image src="/../public/img/search.png" height={24} width={24} alt={"search"}/>
                </div>
                <div className={styles.login}>
                    <button value={"LOGIN"} name={"LOGIN"}>LOGIN</button>
                </div>
            </div>
        </>
    );
};

export default NavBar;
