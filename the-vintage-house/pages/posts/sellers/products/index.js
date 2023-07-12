import Layout from "../../../../components/Layout";
import NavbarSellers from "../../../../components/NavBarSellers";
import Image from "next/image";
import SellerProductAD from "../../../../components/SellerProductAD";
import FooterSellers from "../../../../components/FooterSellers";
import {useRouter} from "next/dist/client/compat/router";
import {useEffect} from "react";

export default function Sellers() {

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
                    router.push('/posts/sellers/products');
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


    return (<>

        <div className={"main-content"}>
            <Layout />
            <NavbarSellers />
            <span className={"homeTitle"}>MY PRODUCTS</span>
            <span className={"homeDescription"}>Unlock the potential of your vintage treasures! Join our seller community and showcase your unique collection to vintage enthusiasts around the world.</span>
            <div className={"arrows"}>
                <Image src="/../public/img/arrow1.png" height={265.5} width={181.31} alt={"arrow1"}/>
                <Image src="/../public/img/arrow2.png" height={265.5} width={181.31} alt={"arrow2"}/>
            </div>
            <div className={"productTextcontent"}>
                <span>MANAGE YOUR PRODUCTS</span>
                <p>You can add or delete some products below here !</p>
                <button>ADD</button>
            </div>

            <div className={"productsSeller"}>
                    <div className="card">
                        <SellerProductAD srcImage={"/../public/img/imgBooksAndMagasine/manga4.jpeg"} productName={"Miraculous ED1"} productQuantity={45} productPrice={"23£"} productDescription={"The first Edition of Miraculous Manga !"} productAuction={"From 08/07/2023 to 12/12/2002"} />
                    </div>
                    <div className="card">
                        <SellerProductAD srcImage={"/../public/img/imgBooksAndMagasine/manga4.jpeg"} productName={"Miraculous ED1"} productQuantity={45} productPrice={"23£"} productDescription={"The first Edition of Miraculous Manga !"}  />
                    </div>
                    <div className="card">
                        <SellerProductAD srcImage={"/../public/img/imgBooksAndMagasine/manga4.jpeg"} productName={"Miraculous ED1"} productQuantity={45} productPrice={"23£"} productDescription={"The first Edition of Miraculous Manga !"} productAuction={"From 08/07/2023 to 12/12/2002"} />
                    </div>
                    <div className="card">
                        <SellerProductAD srcImage={"/../public/img/imgBooksAndMagasine/manga4.jpeg"} productName={"Miraculous ED1"} productQuantity={45} productPrice={"23£"} productDescription={"The first Edition of Miraculous Manga !"} productAuction={"From 08/07/2023 to 12/12/2002"} />
                    </div>
                    <div className="card">
                        <SellerProductAD srcImage={"/../public/img/imgBooksAndMagasine/manga4.jpeg"} productName={"Miraculous ED1"} productQuantity={45} productPrice={"23£"} productDescription={"The first Edition of Miraculous Manga !"} productAuction={"From 08/07/2023 to 12/12/2002"} />
                    </div>
                    <div className="card">
                        <SellerProductAD srcImage={"/../public/img/imgBooksAndMagasine/manga4.jpeg"} productName={"Miraculous ED1"} productQuantity={45} productPrice={"23£"} productDescription={"The first Edition of Miraculous Manga !"} />
                    </div>
                    <div className="card">
                        <SellerProductAD srcImage={"/../public/img/imgBooksAndMagasine/manga4.jpeg"} productName={"Miraculous ED1"} productQuantity={45} productPrice={"23£"} productDescription={"The first Edition of Miraculous Manga !"} productAuction={"From 08/07/2023 to 12/12/2002"} />
                    </div>
                    <div className="card">
                        <SellerProductAD srcImage={"/../public/img/imgBooksAndMagasine/manga4.jpeg"} productName={"Miraculous ED1"} productQuantity={45} productPrice={"23£"} productDescription={"The first Edition of Miraculous Manga !"} productAuction={"From 08/07/2023 to 12/12/2002"} />
                    </div>
                    <div className="card">
                        <SellerProductAD srcImage={"/../public/img/imgBooksAndMagasine/manga4.jpeg"} productName={"Miraculous ED1"} productQuantity={45} productPrice={"23£"} productDescription={"The first Edition of Miraculous Manga !"} productAuction={"From 08/07/2023 to 12/12/2002"} />
                    </div>
                    <div className="card">
                        <SellerProductAD srcImage={"/../public/img/imgBooksAndMagasine/manga4.jpeg"} productName={"Miraculous ED1"} productQuantity={45} productPrice={"23£"} productDescription={"The first Edition of Miraculous Manga !"}  />
                    </div>
                    <div className="card">
                        <SellerProductAD srcImage={"/../public/img/imgBooksAndMagasine/manga4.jpeg"} productName={"Miraculous ED1"} productQuantity={45} productPrice={"23£"} productDescription={"The first Edition of Miraculous Manga !"} productAuction={"From 08/07/2023 to 12/12/2002"} />
                    </div>
                    <div className="card">
                        <SellerProductAD srcImage={"/../public/img/imgBooksAndMagasine/manga4.jpeg"} productName={"Miraculous ED1"} productQuantity={45} productPrice={"23£"} productDescription={"The first Edition of Miraculous Manga !"} productAuction={"From 08/07/2023 to 12/12/2002"} />
                    </div>


            </div>





        </div>
        <FooterSellers />



    </>)

}