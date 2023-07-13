import Layout from "../../components/Layout";
import Image from "next/image";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import {useRouter} from "next/dist/client/compat/router";
import {useEffect} from "react";

const Informations = () => {

    const router = useRouter();

    useEffect(() => {
        const expirationTime = sessionStorage.getItem('expiration_time');
        const userType = sessionStorage.getItem('user_type');

        if (!userType || (expirationTime && Date.now() > parseInt(expirationTime))) {
            //router.push('/informations');
        } else {
            switch (userType) {
                case 'customer':
                    router.push('/posts/customer');
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
                <NavBar />
                <span className={"homeTitle"}>INFORMATIONS</span>
                <span className={"homeDescription"}>Find all the information about payment options available here. Step into the past with our exquisite vintage collection and discover unique treasures at our store.</span>
                <div className={"arrows"}>
                    <Image src="/../public/img/arrow1.png" height={265.5} width={181.31} alt={"arrow1"}/>
                    <Image src="/../public/img/arrow2.png" height={265.5} width={181.31} alt={"arrow2"}/>
                </div>
                <fieldset>
                    <legend id={"auctions"}>AUCTIONS</legend>
                    <p>In the "Auctions" category, you can participate in bidding for unique items within a specific timeframe. For example, from Monday, April 19, 2021, at 9:00 a.m. to Friday, April 23, 2021, at 4:59 p.m. To bid on an item, follow these steps:</p>
                    <ol>
                        <li>Click on the bid button to express your interest in a particular item.</li>
                        <li>We will handle the bidding process on your behalf.</li>
                        <li>If your maximum bid exceeds the current highest bid, we will automatically place incremental bids until you become the highest bidder. Please note that you will only pay the final winning bid amount.</li></ol>
                </fieldset>
                <fieldset>
                    <legend id={"buyitnow"}>BUY IT NOW</legend>
                    <p>In the "Buy it now" category, there is no auction involved. You can purchase the item immediately at the listed price without the need to bid. This is the most convenient way to buy, as you can secure the item instantly.</p>
                </fieldset>
                <fieldset>
                    <legend id={"bestoffer"}>BEST OFFER</legend>
                    <p>In the "Best Offer" category, you can electronically negotiate with the seller via the The Vintage House website. You have the opportunity to propose your best offer and negotiate the final price of an item. The negotiation process works as follows:</p>
                    <ol>
                        <li>You make an offer to the seller and wait for their response.</li>
                        <li>The seller may accept your offer or provide a counter-offer.</li>
                        <li>The negotiation can go back and forth up to five times to reach a mutually satisfactory price.</li>
                        <li>It's important to note that when you make an offer, you are entering into a legal contract to purchase the item if the seller accepts your offer.</li></ol>
                </fieldset>
                <Footer />
            </div>
        </>
    );
}
export default Informations;