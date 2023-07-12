import styles from './adminsellers.module.css'

const AdminSellersPan = (children) => {

    return(<>
            <div className={styles.adminSellerPan}>
                <div className={styles.flname}>
                    <span>LAST NAME: {children.firstname}</span>
                    <span>FIRST NAME: {children.lastname}</span>
                </div>
                <span>E-MAIL: {children.email}</span>
                <span>NUMBER OF ARTICLES: {children.articles}</span>
                <button onClick={children.onDelete}>DELETE</button>
            </div>
        </>

    );

}

export default AdminSellersPan;