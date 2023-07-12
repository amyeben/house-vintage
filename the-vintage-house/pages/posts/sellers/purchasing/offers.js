import Layout from "../../../../components/Layout";
import NavbarSellers from "../../../../components/NavBarSellers";
import Image from "next/image";
import FooterSellers from "../../../../components/FooterSellers";
import SellerOffers from "../../../../components/SellerOffers";
import {useRouter} from "next/dist/client/compat/router";
import {useEffect} from "react";

const Offers = () => {

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
        }
    }, []);


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
                <div className="card">
                <SellerOffers customerEmail={"ebenamy@yahoo.fr"} date={"08/09/2023"} productName={"Miraculous ED1"} offernumber={'4'} offerquantity={20} offerPrice={"120£"} />
                </div>
                <div className="card">
                    <SellerOffers customerEmail={"ebenamy@yahoo.fr"} date={"08/09/2023"} productName={"Miraculous ED1"} offernumber={'4'} offerquantity={20} offerPrice={"120£"} />
                </div>
                <div className="card">
                    <SellerOffers customerEmail={"ebenamy@yahoo.fr"} date={"08/09/2023"} productName={"Miraculous ED1"} offernumber={'4'} offerquantity={20} offerPrice={"120£"} />
                </div>
                <div className="card">
                    <SellerOffers customerEmail={"ebenamy@yahoo.fr"} date={"08/09/2023"} productName={"Miraculous ED1"} offernumber={'4'} offerquantity={20} offerPrice={"120£"} />
                </div>
                <div className="card">
                    <SellerOffers customerEmail={"ebenamy@yahoo.fr"} date={"08/09/2023"} productName={"Miraculous ED1"} offernumber={'4'} offerquantity={20} offerPrice={"120£"} />
                </div>
                <div className="card">
                    <SellerOffers customerEmail={"ebenamy@yahoo.fr"} date={"08/09/2023"} productName={"Miraculous ED1"} offernumber={'4'} offerquantity={20} offerPrice={"120£"} />
                </div>
                <div className="card">
                    <SellerOffers customerEmail={"ebenamy@yahoo.fr"} date={"08/09/2023"} productName={"Miraculous ED1"} offernumber={'4'} offerquantity={20} offerPrice={"120£"} />
                </div>
                <div className="card">
                    <SellerOffers customerEmail={"ebenamy@yahoo.fr"} date={"08/09/2023"} productName={"Miraculous ED1"} offernumber={'4'} offerquantity={20} offerPrice={"120£"} />
                </div>
                <div className="card">
                    <SellerOffers customerEmail={"ebenamy@yahoo.fr"} date={"08/09/2023"} productName={"Miraculous ED1"} offernumber={'4'} offerquantity={20} offerPrice={"120£"} />
                </div>
                <div className="card">
                    <SellerOffers customerEmail={"ebenamy@yahoo.fr"} date={"08/09/2023"} productName={"Miraculous ED1"} offernumber={'4'} offerquantity={20} offerPrice={"120£"} />
                </div>
                <div className="card">
                    <SellerOffers customerEmail={"ebenamy@yahoo.fr"} date={"08/09/2023"} productName={"Miraculous ED1"} offernumber={'4'} offerquantity={20} offerPrice={"120£"} />
                </div>
                <div className="card">
                    <SellerOffers customerEmail={"ebenamy@yahoo.fr"} date={"08/09/2023"} productName={"Miraculous ED1"} offernumber={'4'} offerquantity={20} offerPrice={"120£"} />
                </div>
                <div className="card">
                    <SellerOffers customerEmail={"ebenamy@yahoo.fr"} date={"08/09/2023"} productName={"Miraculous ED1"} offernumber={'4'} offerquantity={20} offerPrice={"120£"} />
                </div>

            </div>

        </div>
        <FooterSellers />


    </>);
}
export default Offers;