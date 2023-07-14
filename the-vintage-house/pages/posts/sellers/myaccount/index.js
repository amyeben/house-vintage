import Layout from "../../../../components/Layout";
import Image from "next/image";
import { useRouter } from "next/dist/client/compat/router";
import { useEffect, useState } from "react";
import NavbarSellers from "../../../../components/NavBarSellers";
import axios from "axios";

const MyaccountSellers = () => {
    const router = useRouter();
    const [sellerInfo, setSellerInfo] = useState(null);

    useEffect(() => {
        const expirationTime = sessionStorage.getItem("expiration_time");
        const userType = sessionStorage.getItem("user_type");

        if (!userType || (expirationTime && Date.now() > parseInt(expirationTime))) {
            // La session a expiré ou l'utilisateur n'est pas connecté, rediriger vers la page de connexion
            router.push("/login");
        } else {
            switch (userType) {
                case "customer":
                    // Rediriger l'utilisateur customer vers sa propre page
                    router.push("/posts/customer");
                    break;
                case "seller":
                    // Rediriger l'utilisateur seller vers sa propre page
                    fetchSellerInfo();
                    break;
                case "admin":
                    // Rediriger l'utilisateur admin vers sa propre page
                    router.push("/posts/admin");
                    break;
                default:
                    // Rediriger vers une page d'erreur ou de connexion
                    router.push("/error");
                    break;
            }
        }
    }, []);

    const fetchSellerInfo = async () => {
        const userId = sessionStorage.getItem("user_id");
        try {
            const response = await axios.post(
                "http://localhost:8888/get_seller_info.php",
                { userId }
            );
            const sellerData = response.data;
            setSellerInfo(sellerData);
        } catch (error) {
            console.error("An error occurred while fetching seller info:", error);
        }
    };

    return (
        <>
            <div className={"main-content"}>
                <Layout />
                <NavbarSellers />
                <div className={"sellerMA"}>
                    <div className={"sellerMA1"}>
                        <span>THE VINTAGE HOUSE</span>
                        <span>SELLER</span>
                        <Image src={"/img/bubble.png"} height={138} width={138} alt={"bubble"} />
                        <p>{sellerInfo?.firstName}</p>
                        <p>{sellerInfo?.lastName}</p>
                    </div>
                    <div className={"sellerMA2"}>
                        <span>MY INFORMATION</span>
                        <div className={"row"}>
                            <div>
                                <span>Email: {sellerInfo?.email}</span>
                            </div>
                            <div>
                                <span>Address: {sellerInfo?.address}</span>
                            </div>
                            <div>
                                <span>Items: {sellerInfo?.items}</span>
                            </div>
                            <div>
                                <span>Sold Products: {sellerInfo?.soldProducts}</span>
                            </div>
                            <div>
                                <button>DELETE MY ACCOUNT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyaccountSellers;
