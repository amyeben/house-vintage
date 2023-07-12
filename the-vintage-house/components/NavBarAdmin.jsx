import Link from 'next/link';
import styles from './navbar.module.css';
import Image from 'next/image';
import {useEffect, useState} from 'react';
import {useRouter} from "next/dist/client/compat/router";

const NavbarAdmin = () => {


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

    const router = useRouter();

    useEffect(() => {

        const expirationTime = sessionStorage.getItem('expiration_time');
        const userType = sessionStorage.getItem('user_type');

        if (!userType || (expirationTime && Date.now() > parseInt(expirationTime))) {
            // La session a expiré ou l'utilisateur n'est pas connecté, rediriger vers la page de connexion
            router.push('/login');
        } else {
            switch (userType) {
                case 'customer':
                    // Rediriger l'utilisateur customer vers sa propre page
                    router.push('/posts/customer');
                    break;
                case 'seller':
                    // Rediriger l'utilisateur seller vers sa propre page
                    router.push('/posts/sellers');
                    break;
                case 'admin':
                    // Rediriger l'utilisateur admin vers sa propre page
                    router.push('/posts/admin');
                    break;
                default:
                    // Rediriger vers une page d'erreur ou de connexion
                    router.push('/error');
                    break;
            }
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
                        <span>ADMIN PAGE</span>
                    </div>

                </div>
                <div className={styles.textArea}>
                    <textarea cols={5} rows={2} defaultValue={"SEARCH..."}></textarea>
                    <Image src="/../public/img/search.png" height={24} width={24} alt={"search"}/>
                </div>
                <div className={styles.login}>
                    <button value={"LOG OUT"} name={"logout"} onClick={handleLogout}>LOG OUT</button>
                </div>


            </div>
        </>
    );
};

export default NavbarAdmin;
