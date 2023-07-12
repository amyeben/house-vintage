import styles from '../styles/login.module.css';
import { useState } from 'react';
import axios from 'axios';
import stringify from "postcss/lib/stringify";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { email, password };
        const dataPost = JSON.stringify(data);
        console.log(data);

        if (!email || !password) {
            console.log('Veuillez remplir tous les champs !!');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8888/login.php', { email, password });

            if (response.status !== 200) {
                throw new Error('Erreur lors de la requête.');
            }

            const responseData = response.data;

            if (responseData["success"] !== false) {
                // Configurer la durée de la session ici
                const sessionDuration = 5 * 60 * 1000;
                const expirationTime = Date.now() + sessionDuration;

                sessionStorage.setItem('user_type', responseData.user_type);
                sessionStorage.setItem('expiration_time', expirationTime);

                // Rediriger l'utilisateur en fonction du type
                switch (responseData.user_type) {
                    case 'seller':
                        window.location.href = '/posts/sellers';
                        break;
                    case 'customer':
                        window.location.href = '/posts/customer';
                        break;
                    case 'admin':
                        window.location.href = '/posts/admin';
                        break;
                }
            } else {
                console.log(email);
                console.log(password);
                console.log(responseData["success"]);
                console.log(JSON.stringify(responseData["message"]));
                // Afficher un message d'erreur à l'utilisateur
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

    return (
        <>
            <div className={styles.loginForm}>
                <span>THE VINTAGE HOUSE</span>
                <form className={styles.form} method={"POST"}>
                    <input
                        name="email"
                        type="text"
                        placeholder="USERNAME - EMAIL"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="PASSWORD"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button onClick={handleSubmit} type={"submit"}>LOGIN</button>
                </form>
                <a href="/suscribe">
                    <button>SIGN UP</button>
                </a>
            </div>
        </>
    );
};

export default Login;
