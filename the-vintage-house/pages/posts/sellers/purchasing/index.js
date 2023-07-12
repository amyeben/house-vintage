import Layout from "../../../../components/Layout";
import NavbarSellers from "../../../../components/NavBarSellers";
import FooterSellers from "../../../../components/FooterSellers";
import Image from "next/image";
import {useRouter} from "next/dist/client/compat/router";
import {useEffect} from "react";

const Purchasing = () => {

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
                    router.push('/posts/sellers/purchasing');
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
            <span className={"homeTitle"}>PURCHASING</span>
            <span className={"homeDescription"}>Find all the information about payment options available here. </span>
            <div className={"arrows"}>
                <Image src="/../public/img/arrow1.png" height={265.5} width={181.31} alt={"arrow1"}/>
                <Image src="/../public/img/arrow2.png" height={265.5} width={181.31} alt={"arrow2"}/>
            </div>
            <fieldset>
                <legend>AUCTIONS</legend>
                <p>In the "Auctions" category, you can list unique items for bidding within a specific timeframe. For example, from Monday, April 19, 2021, at 9:00 a.m. to Friday, April 23, 2021, at 4:59 p.m. To list an item for auction, follow these steps:</p>

                <ol>
                    <li>Set a starting bid price for the item.</li>
                    <li>Interested buyers will place bids on the item.</li>
                    <li>If a bid exceeds the current highest bid, the system will automatically update the highest bid.</li>
                    <li>At the end of the auction, the highest bidder will win the item and be obligated to complete the purchase by paying the final winning bid amount.</li>
                </ol>
            </fieldset>
            <fieldset>
                <legend>OFFERS</legend>
                <p>In the "Best Offer" category, you can negotiate with potential buyers through the The Vintage House website. You have the opportunity to consider offers from interested buyers and negotiate the final selling price of an item. The negotiation process works as follows:</p>

                <ol>
                    <li>A buyer submits an offer for your item.</li>
                    <li>You can choose to accept the offer or provide a counter-offer.</li>
                    <li>The negotiation can go back and forth up to five times to reach a mutually satisfactory price.</li>
                </ol>

                <p>It's important to note that when you accept an offer, you are entering into a legal contract to sell the item at the agreed-upon price if the buyer accepts your offer. Make sure to carefully review and consider each offer before making a decision.</p>
                </fieldset>

        </div>
        <FooterSellers />
    </>);
}
export default Purchasing;