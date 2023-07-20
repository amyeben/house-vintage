import Layout from "../../../../components/Layout";
import NavbarSellers from "../../../../components/NavBarSellers";
import Image from "next/image";
import FooterSellers from "../../../../components/FooterSellers";
import SellerOffers from "../../../../components/SellerOffers";
import {useRouter} from "next/dist/client/compat/router";
import {useEffect, useState} from "react";
import axios from "axios";

const Offers = () => {

    const router = useRouter();
    const [sellerOffer, setSellerOffer] = useState([]);
    const [refusedOffers, setRefusedOffers] = useState([]);
    const [sellerId, setSellerId] = useState(-1);

    useEffect(() => {
        const expirationTime = sessionStorage.getItem('expiration_time');
        const userType = sessionStorage.getItem('user_type');
        const seller_id = sessionStorage.getItem('user_id');
        setSellerId(seller_id);

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
                    router.push('/posts/sellers/purchasing/offers');
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

            axios
                .post("http://localhost:8888/get_seller_offers.php", { seller_id : seller_id })
                .then((response) => {
                    const seller_offers = response.data;
                    console.log(seller_offers);
                    setSellerOffer(seller_offers);
                })
                .catch((error) => console.log(error));
        }
    }, []);

    const handleRefuseOffer = async (offerId) => {
    try {
        await axios.delete(`http://localhost:8888/delete_offers.php?id=${offerId}`);
        setSellerOffer((prevSellerOffer) => prevSellerOffer.filter((offer) => offer.id !== offerId));}
        catch (error){
            console.error("An error occurred while deleting the item:", error);
        }
    };

    const handleAcceptOffer = async (offerId, offerPrice, email, productName) => {
        try {
            await axios.post("http://localhost:8888/payement.php", {

                offerId,
                offerPrice,
                email,

            });
            await axios.delete(`http://localhost:8888/delete_offers.php?id=${offerId}`);
            setSellerOffer((prevSellerOffer) => prevSellerOffer.filter((offer) => offer.id !== offerId));}
        catch (error){
            console.error("An error occurred while deleting the item:", error);
        }

    }


    return(<>
        <div className={"main-content"}>
            <Layout />
            <NavbarSellers />
            <span className={"homeTitle"}>OFFERS</span>
            <span className={"homeDescription"}>At The Vintage House, 'Best Offer' empowers sellers to negotiate and agree on the final selling price with potential buyers, providing flexibility and maximizing the chances of a successful sale.</span>
            <div className={"arrows"}>
                <Image src="/../public/img/arrow1.png" height={265.5} width={181.31} alt={"arrow1"}/>
                <Image src="/../public/img/arrow2.png" height={265.5} width={181.31} alt={"arrow2"}/>
            </div>
            <div className={"productTextcontent"}>
                <span>ACCEPT OR REFUSE THESE OFFERS !</span>
            </div>
            <div className={"offersSeller"}>
                {sellerOffer.map((offer) => (
                    <div className="card" key={offer.id}>
                        <SellerOffers
                            customerEmail={offer.customer_email}
                            date={offer.date}
                            productName={offer.product_name}
                            offernumber={offer.number_offer}
                            offerquantity={offer.quantity}
                            offerPrice={offer.price_offer}
                            onRefuse={() => handleRefuseOffer(offer.id)}
                            onAccept={() => handleAcceptOffer(offer.id, offer.price_offer, offer.customer_email, offer.product_name)}

                        />
                    </div>
                ))}
            </div>

        </div>
        <FooterSellers />


    </>);
}
export default Offers;