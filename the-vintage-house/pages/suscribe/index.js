import styles from '../../styles/login.module.css'
import Image from "next/image";
import {useState} from "react";
import axios from "axios";

const Suscribe = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { firstName, lastName, address, username, password, user};
        //const dataPost = JSON.stringify(data);
        console.log(data);

        if (!firstName || !lastName || !address || !username || !password) {
            console.log('Veuillez remplir tous les champs !!');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8888/suscribe.php', data);

            if (response.status !== 200) {
                throw new Error('Erreur lors de la requête.');
            }

            const responseData = response.data;

            if (responseData["success"] !== false) {
                console.log(responseData);
                console.log("USER ADD SUCCESSFULLY");
                window.location.href = '/login';


            } else {
                console.log("USER NOT ADD")
            }
        } catch (error) {
            console.log(error);
            const errorMessage = "Une erreur s'est produite lors de la requête.";
            const errorResponse = {
                success: false,
                message: errorMessage
            };
            console.log(errorResponse);
        }
    };



    return(
        <>

            <div className={styles.suscribeForm}>
                <span>THE VINTAGE HOUSE</span>
                <form className={styles.formSuscribe}>
                    <div className={styles.name}>
                        <input name={"firstname"} value={firstName} onChange={(e) => setFirstName(e.target.value)} type={"text"} placeholder={"FIRST NAME"} required/>
                        <input name={"lastname"} value={lastName} onChange={(e) => setLastName(e.target.value)} type={"text"} placeholder={"LAST NAME"} required/>
                    </div>
                    <input name={"address"} value={address} onChange={(e) => setAddress(e.target.value)} type={"text"} placeholder={"ADDRESS"} required/>
                    <input name={"username"} value={username} onChange={(e) => setUsername(e.target.value)} type={"text"} placeholder={"USERNAME - EMAIL"} required/>
                    <input name={"password"} value={password} onChange={(e) => setPassword(e.target.value)} type={"text"} placeholder={"PASSWORD"} required/>
                    <div className={styles.radioButton}>
                        <input
                            type="radio"
                            value="SELLER"
                            name="usertype"
                            checked={user === "SELLER"}
                            onChange={(e) => setUser(e.target.value)}
                        />{" "}
                        SELLER
                        <input
                            type="radio"
                            value="CUSTOMER"
                            name="usertype"
                            checked={user === "CUSTOMER"}
                            onChange={(e) => setUser(e.target.value)}
                        />{" "}
                        CUSTOMER
                    </div>
                    <button onClick={handleSubmit} type={"submit"}>SIGN UP</button>
                </form>
                    <a href={"/login"}><button className={styles.buttonARD}>ALREADY AN ACCOUNT</button></a>


            </div>

        </>
    );
}

export default Suscribe;