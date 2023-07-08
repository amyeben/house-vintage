import Link from 'next/link';
import styles from './navbar.module.css';
import Image from 'next/image';
import { useEffect } from 'react';

const NavbarAdmin = () => {


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


            </div>
        </>
    );
};

export default NavbarAdmin;
