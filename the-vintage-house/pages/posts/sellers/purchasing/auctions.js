import Layout from "../../../../components/Layout";
import NavbarSellers from "../../../../components/NavBarSellers";
import Image from "next/image";
import FooterSellers from "../../../../components/FooterSellers";
import SellerAuctionsApply from "../../../../components/SellerAuctionsApply";
import {useRouter} from "next/dist/client/compat/router";
import {useEffect} from "react";

const Auctions = () => {

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
                    router.push('/posts/sellers/purchasing/auctions');
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
            <span className={"homeTitle"}>AUCTIONS</span>
            <span className={"homeDescription"}>Take advantage of our 'Auctions' feature as a seller, where you can list unique items for bidding within a specific timeframe, creating excitement and competition among interested buyers.</span>
            <div className={"arrows"}>
                <Image src="/../public/img/arrow1.png" height={265.5} width={181.31} alt={"arrow1"}/>
                <Image src="/../public/img/arrow2.png" height={265.5} width={181.31} alt={"arrow2"}/>
            </div>
            <div className={"productTextcontent"}>
                <span>APPLY AUCTIONS TO EXISTING PRODUTCS</span>
            </div>
            <div className={"auctionsSeller"}>
                <div className="card">
                    <SellerAuctionsApply srcImage={"/../public/img/imgBooksAndMagasine/manga4.jpeg"} productName={"Miraculous ED1"} productQuantity={45} productPrice={"23£"} productDescription={"The first Edition of Miraculous Manga !"} productAuction={"From 08/07/2023 to 12/12/2002"} />
                </div>
                <div className="card">
                    <SellerAuctionsApply srcImage={"/../public/img/imgBooksAndMagasine/manga4.jpeg"} productName={"Miraculous ED1"} productQuantity={45} productPrice={"23£"} productDescription={"The first Edition of Miraculous Manga !"} productAuction={"From 08/07/2023 to 12/12/2002"} />
                </div>
                <div className="card">
                    <SellerAuctionsApply srcImage={"/../public/img/imgBooksAndMagasine/manga4.jpeg"} productName={"Miraculous ED1"} productQuantity={45} productPrice={"23£"} productDescription={"The first Edition of Miraculous Manga !"} productAuction={"From 08/07/2023 to 12/12/2002"} />
                </div>
                <div className="card">
                    <SellerAuctionsApply srcImage={"/../public/img/imgBooksAndMagasine/manga4.jpeg"} productName={"Miraculous ED1"} productQuantity={45} productPrice={"23£"} productDescription={"The first Edition of Miraculous Manga !"} productAuction={"From 08/07/2023 to 12/12/2002"} />
                </div>
                <div className="card">
                    <SellerAuctionsApply srcImage={"/../public/img/imgBooksAndMagasine/manga4.jpeg"} productName={"Miraculous ED1"} productQuantity={45} productPrice={"23£"} productDescription={"The first Edition of Miraculous Manga !"} productAuction={"From 08/07/2023 to 12/12/2002"} />
                </div>
                <div className="card">
                    <SellerAuctionsApply srcImage={"/../public/img/imgBooksAndMagasine/manga4.jpeg"} productName={"Miraculous ED1"} productQuantity={45} productPrice={"23£"} productDescription={"The first Edition of Miraculous Manga !"} productAuction={"From 08/07/2023 to 12/12/2002"} />
                </div>
                <div className="card">
                    <SellerAuctionsApply srcImage={"/../public/img/imgBooksAndMagasine/manga4.jpeg"} productName={"Miraculous ED1"} productQuantity={45} productPrice={"23£"} productDescription={"The first Edition of Miraculous Manga !"} productAuction={"From 08/07/2023 to 12/12/2002"} />
                </div>
                <div className="card">
                    <SellerAuctionsApply srcImage={"/../public/img/imgBooksAndMagasine/manga4.jpeg"} productName={"Miraculous ED1"} productQuantity={45} productPrice={"23£"} productDescription={"The first Edition of Miraculous Manga !"} productAuction={"From 08/07/2023 to 12/12/2002"} />
                </div>
                <div className="card">
                    <SellerAuctionsApply srcImage={"/../public/img/imgBooksAndMagasine/manga4.jpeg"} productName={"Miraculous ED1"} productQuantity={45} productPrice={"23£"} productDescription={"The first Edition of Miraculous Manga !"} productAuction={"From 08/07/2023 to 12/12/2002"} />
                </div>
                <div className="card">
                    <SellerAuctionsApply srcImage={"/../public/img/imgBooksAndMagasine/manga4.jpeg"} productName={"Miraculous ED1"} productQuantity={45} productPrice={"23£"} productDescription={"The first Edition of Miraculous Manga !"} productAuction={"From 08/07/2023 to 12/12/2002"} />
                </div>
                <div className="card">
                    <SellerAuctionsApply srcImage={"/../public/img/imgBooksAndMagasine/manga4.jpeg"} productName={"Miraculous ED1"} productQuantity={45} productPrice={"23£"} productDescription={"The first Edition of Miraculous Manga !"} productAuction={"From 08/07/2023 to 12/12/2002"} />
                </div>
                <div className="card">
                    <SellerAuctionsApply srcImage={"/../public/img/imgBooksAndMagasine/manga4.jpeg"} productName={"Miraculous ED1"} productQuantity={45} productPrice={"23£"} productDescription={"The first Edition of Miraculous Manga !"} productAuction={"From 08/07/2023 to 12/12/2002"} />
                </div>
                <div className="card">
                    <SellerAuctionsApply srcImage={"/../public/img/imgBooksAndMagasine/manga4.jpeg"} productName={"Miraculous ED1"} productQuantity={45} productPrice={"23£"} productDescription={"The first Edition of Miraculous Manga !"} productAuction={"From 08/07/2023 to 12/12/2002"} />
                </div>
                <div className="card">
                    <SellerAuctionsApply srcImage={"/../public/img/imgBooksAndMagasine/manga4.jpeg"} productName={"Miraculous ED1"} productQuantity={45} productPrice={"23£"} productDescription={"The first Edition of Miraculous Manga !"} productAuction={"From 08/07/2023 to 12/12/2002"} />
                </div>
                <div className="card">
                    <SellerAuctionsApply srcImage={"/../public/img/imgBooksAndMagasine/manga4.jpeg"} productName={"Miraculous ED1"} productQuantity={45} productPrice={"23£"} productDescription={"The first Edition of Miraculous Manga !"} productAuction={"From 08/07/2023 to 12/12/2002"} />
                </div>

            </div>

        </div>
        <FooterSellers />


    </>);
}
export default Auctions;