import styles from '../styles/login.module.css'
import Image from "next/image";

const Suscribe = () => {

    return(
        <>

            <div className={styles.suscribeForm}>
                <span>THE VINTAGE HOUSE</span>
                <form className={styles.formSuscribe}>
                    <div className={styles.name}>
                        <input name={"firstname"} type={"text"} placeholder={"FIRST NAME"} required/>
                        <input name={"lastname"} type={"text"} placeholder={"LAST NAME"} required/>
                    </div>
                    <input name={"address"} type={"text"} placeholder={"ADDRESS"} required/>
                    <input name={"username"} type={"text"} placeholder={"USERNAME - EMAIL"} required/>
                    <input name={"password"} type={"text"} placeholder={"PASSWORD"} required/>

                    <button type={"submit"}>SIGN UP</button>
                </form>

            </div>

        </>
    );
}

export default Suscribe;