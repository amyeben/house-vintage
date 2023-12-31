import styles from './adminproductspan.module.css'
import Image from "next/image";


const AdminProductsPan = (children) => {

    return(<>
            <div className={styles.adminproductspan}>
                <Image
                    src={children.srcImage}
                    id={children.id}
                    height={75} // Desired size with correct aspect ratio
                    width={75}
                    alt={"imageCart"}


                />
                <span>NAME OF THE PRODUCT: {children.nameProduct}</span>
                <span>PRICE: {children.price} £ </span>
                <button onClick={children.onDelete}>DELETE</button>
            </div>
        </>

    );

}

export default AdminProductsPan;