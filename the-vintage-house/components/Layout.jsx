import Link from 'next/link';
import styles from './layout.module.css'
import Image from "next/image";

const Layout = () => {
    return (
        <>
            <div className={styles.bubble}>
                <Image
                    src = "/img/bubbles.png"
                    height={568.75} // Desired size with correct aspect ratio
                    width={1634.75}

                />
            </div>
        </>
    );
};

export default Layout;
