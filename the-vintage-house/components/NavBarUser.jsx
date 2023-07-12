import Link from 'next/link';
import styles from './navbar.module.css';
import Image from 'next/image';
import { useEffect } from 'react';

const NavbarUser = () => {

    const logout = () => {
        // Supprimer les informations de session
        sessionStorage.removeItem('user_type');
        sessionStorage.removeItem('expiration_time');

        // Rediriger l'utilisateur vers la page de connexion ou une autre page appropriée
        window.location.href = '/login';
    };

    const handleLogout = () => {
        // Appeler la fonction de déconnexion
        logout();
    };

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
                    <a href={"/posts/customer"}>
                        <Image src="/../public/img/logoTVH.png" height={88} width={93.78} alt={"logo"}/></a>
                </div>
                <div className={styles.spanNav}>
                    <div>
                        <a href={"/posts/customer"}>
                            <span>HOME</span></a>
                    </div>
                    <div className={styles.store}>
                        <a href={"/posts/customer/store"}>
                            <span>STORE</span></a>
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
                    <div className={styles.informations}>
                        <a href={"/posts/customer/informations"}>
                            <span>INFORMATIONS</span></a>
                    </div>
                    <div className={styles.subMenu2}>
                        <a href={"/posts/customer/informations#auctions"}>
                            <span>AUCTIONS</span></a>
                        <a href={"/posts/customer/informations#bestoffer"}>
                            <span>BEST OFFER</span></a>
                        <a href={"/posts/customer/informations#buyitnow"}>
                            <span>BUY IT NOW</span></a>
                    </div>
                    <div>
                        <a href={"/posts/customer/myaccount"}>
                            <span>MY ACCOUNT</span></a>
                    </div>
                </div>
                <div className={styles.textArea}>
                    <textarea cols={5} rows={2} defaultValue={"SEARCH..."}></textarea>
                    <a href={"/posts/customer"}>
                        <Image src="/../public/img/search.png" height={24} width={24} alt={"search"}/></a>
                </div>
                <div className={styles.cart}>
                    <a href={"/posts/customer"}>
                        <Image src="/../public/img/cart 1.png" height={24} width={24} alt={"cart"}/></a>
                </div>
                <div className={styles.login}>
                    <button value={"LOG OUT"} name={"logout"} onClick={handleLogout}>LOG OUT</button>
                </div>

            </div>
        </>
    );
};

export default NavbarUser;
