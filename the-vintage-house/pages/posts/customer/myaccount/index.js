import Layout from "../../../../components/Layout";
import NavbarUser from "../../../../components/NavBarUser";
import Image from "next/image";
import {useEffect} from "react";
import {useRouter} from "next/dist/client/compat/router";

const MyaccountUser = () => {

    const router = useRouter();

    useEffect(() => {
        const expirationTime = sessionStorage.getItem('expiration_time');
        const userType = sessionStorage.getItem('user_type');

        if (!userType || (expirationTime && Date.now() > parseInt(expirationTime))) {
            router.push('/login');
        } else {
            switch (userType) {
                case 'customer':
                    router.push('/posts/customer/myaccount');
                    break;
                case 'seller':
                    router.push('/posts/sellers');
                    break;
                case 'admin':
                    router.push('/posts/admin');
                    break;
                default:
                    router.push('/error');
                    break;
            }
        }
    }, []);

    return (
        <>
            <div className={"main-content"}>
                <Layout />
                <NavbarUser />
                <div className={"customerMA"}>
                <div className={"customerMA1"}>
                    <span>THE VINTAGE HOUSE</span>
                    <span>CUSTOMER</span>
                    <Image
                        src={"/img/bubble.png"}
                        height={138}
                        width={138}
                        alt={"bubble"}
                    />
                    <p>NOM</p>
                    <p>PRENOM</p>
                </div>
                <div className={"customerMA2"}>
                    <span>MY INFORMATIONS</span>
                    <div className={"row"}>
                        <div>
                            <span>EMAIL: XXXXXXXXXXXXXX@XXXXXXXX.COM</span><br />
                        </div>
                        <div>
                            <span>ADDRESS: XXXXXXXXXXXXXXXXXXXXXXXXXX</span><br />
                        </div>
                        <div>

                            <span>OFFERS: X</span><br />
                        </div>
                        <div>
                            <span>PURCHASES: X</span><br />
                        </div>

                        <div>

                            <span>AUCTIONS: X</span><br />
                        </div>
                        <div>

                            <span>PROMOTION CODE: XXXXXXXXXXX</span>
                        </div>
                        <div>
                            <button>DELETE MY ACCOUNT</button>
                        </div>
                </div>
                </div>
                </div></div>

        </>
    )
}; export default MyaccountUser;