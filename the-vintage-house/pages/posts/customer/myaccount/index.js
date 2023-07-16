import Layout from "../../../../components/Layout";
import NavbarUser from "../../../../components/NavBarUser";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/dist/client/compat/router";

const MyaccountUser = () => {
    const router = useRouter();
    const [customerInfo, setCustomerInfo] = useState(null);
    const summerPromoCode = "SUMMER20";

    useEffect(() => {

        const expirationTime = sessionStorage.getItem('expiration_time');
        const userType = sessionStorage.getItem('user_type');
        const customerId = sessionStorage.getItem('user_id')

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
            }}

        const fetchData = async () => {
            try {

                const response = await axios.get(`http://localhost:8888/get_customer_info.php?id=${customerId}`);

                if (response.status !== 200) {
                    throw new Error("Error while fetching the customer's info.");
                }

                setCustomerInfo(response.data);
            } catch (error) {
                console.error("An error occurred while fetching the customer's info:", error);
            }
        };

        fetchData();
    }, []);

    const handleDeleteAccount = async () => {
        const customerId = sessionStorage.getItem("user_id");
        await axios.delete(`http://localhost:8888/delete_customers.php?id=${customerId}`)
        // Rediriger vers la page de connexion après la suppression du compte
        await router.push("/login");
    };


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
                        <p>{customerInfo ? customerInfo.last_name : "LAST NAME"}</p>
                        <p>{customerInfo ? customerInfo.first_name : "FIRST NAME"}</p>
                    </div>
                    <div className={"customerMA2"}>
                        <span>MY INFORMATION</span>
                        {customerInfo && (
                            <div className={"row"}>
                                <div>
                                    <span>EMAIL: {customerInfo.email}</span><br />
                                </div>
                                <div>
                                    <span>ADDRESS: {customerInfo.address}</span><br />
                                </div>
                                <div>
                                    <span>OFFERS: {customerInfo.offers_count}</span><br />
                                </div>
                                <div>
                                    <span>PURCHASES: {customerInfo.purchases_count}</span><br />
                                </div>
                                <div>
                                    <span>AUCTIONS: {customerInfo.auctions_count}</span><br />
                                </div>
                                <div>
                                    <span>PROMOTION CODE: {summerPromoCode}</span>
                                </div>
                                <div>
                                    <button onClick={handleDeleteAccount}>DELETE MY ACCOUNT</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
};

export default MyaccountUser;
