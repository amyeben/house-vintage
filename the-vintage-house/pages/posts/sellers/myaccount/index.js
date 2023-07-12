import Layout from "../../../../components/Layout";
import Image from "next/image";
import {useRouter} from "next/dist/client/compat/router";
import {useEffect} from "react";
import NavbarSellers from "../../../../components/NavBarSellers";

const MyaccountSellers = () => {

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
                    router.push('/posts/sellers/myaccount');
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
            <div className={"main-content"}>
                <Layout />
                <NavbarSellers />
                <div className={"sellerMA"}>
                    <div className={"sellerMA1"}>
                        <span>THE VINTAGE HOUSE</span>
                        <span>SELLER</span>
                        <Image
                            src={"/img/bubble.png"}
                            height={138}
                            width={138}
                            alt={"bubble"}
                        />
                        <p>NOM</p>
                        <p>PRENOM</p>
                    </div>
                    <div className={"sellerMA2"}>
                        <span>MY INFORMATIONS</span>
                        <div className={"row"}>
                            <div>
                                <span>EMAIL: XXXXXXXXXXXXXX@XXXXXXXX.COM</span><br />
                            </div>
                            <div>
                                <span>ADDRESS: XXXXXXXXXXXXXXXXXXXXXXXXXX</span><br />
                            </div>
                            <div>
                                <span>ITEMS: X</span><br />
                            </div>
                            <div>
                                <span>SOLD PRODUCT: X</span>
                            </div>


                                <div><button>DELETE MY ACCOUNT</button></div>
                            </div>
                        </div>
                </div></div>

        </>
    )
}; export default MyaccountSellers;