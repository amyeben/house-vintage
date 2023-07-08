import styles from '../styles/login.module.css'
import Image from "next/image";

const Login = () => {

    return(
        <>

            <div className={styles.loginForm}>
                <span>THE VINTAGE HOUSE</span>
                <form>
                <input name={"username"} type={"text"} placeholder={"USERNAME - EMAIL"} required/>
                <input name={"password"} type={"text"} placeholder={"PASSWORD"} required/>

                <button type={"submit"}>LOGIN</button>
                </form>
                <button>SIGN UP</button>
            </div>

        </>
    );
}

export default Login;