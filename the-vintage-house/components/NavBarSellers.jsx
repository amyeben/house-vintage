import Link from 'next/link';
import styles from './navbar.module.css';
import Image from 'next/image';
import { useEffect } from 'react';

const NavbarSellers = () => {

    const logout = () => {
        // Supprimer les informations de session
        sessionStorage.removeItem('user_type');
        sessionStorage.removeItem('expiration_time');

        // Rediriger l'utilisateur vers la page de connexion ou une autre page appropriée
        window.location.href = '/';
    };

    const handleLogout = () => {
        // Appeler la fonction de déconnexion
        logout();
    };

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

            <div className={styles.nav}>
                <div className={styles.logoTVH}>
                    <a href={"/posts/sellers"}>
                        <Image src="/../public/img/logoTVH.png" height={88} width={93.78} alt={"logo"}/>
                    </a>
                </div>
                <div className={styles.spanNav}>
                    <div>
                        <a href={"/posts/sellers"}>
                            <span>HOME</span></a>
                    </div>
                    <div>
                        <a href={"/posts/sellers/products"}>
                            <span>MY PRODUCTS</span></a>
                    </div>
                    <div className={styles.informations}>
                        <a href={"/posts/sellers/purchasing"}>
                            <span>PURCHASING</span></a>
                    </div>
                    <div className={styles.subMenu2}>
                        <a href={"/posts/sellers/purchasing/auctions"}>
                            <span>AUCTIONS</span></a>
                        <a href={"/posts/sellers/purchasing/offers"}>
                            <span>OFFERS</span></a>
                    </div>
                    <div>
                        <a href={"/posts/sellers/myaccount"}>
                            <span>MY ACCOUNT</span></a>
                    </div>
                </div>
                <div className={styles.textArea}>
                    <textarea cols={5} rows={2} defaultValue={"SEARCH..."}></textarea>
                    <a href={"/posts/sellers"}>
                    <Image src="/../public/img/search.png" height={24} width={24} alt={"search"}/>
                    </a>
                </div>
                <div className={styles.login}>
                    <button value={"LOG OUT"} name={"logout"} onClick={handleLogout}>LOG OUT</button>
                </div>

            </div>
        </>
    );
};

export default NavbarSellers;
