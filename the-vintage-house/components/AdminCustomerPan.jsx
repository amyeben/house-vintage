import styles from './adminuserpan.module.css'

const AdminCustomerPan = (children) => {

    return(<>
        <div className={styles.adminUserPan}>
            <div className={styles.flname}>
                <span>LAST NAME: {children.firstname}</span>
                <span>FIRST NAME: {children.lastname}</span>
            </div>
            <span>E-MAIL: {children.email}</span>
            <span>PURCHASES: {children.purchases}</span>
            <span>OFFERS: {children.offers}</span>
            <button onClick={children.onDelete}>DELETE</button>
        </div>
        </>

    );

}

export default AdminCustomerPan;