import Layout from "../../../../components/Layout";
import NavbarSellers from "../../../../components/NavBarSellers";
import Image from "next/image";
import FooterSellers from "../../../../components/FooterSellers";
import SellerAuctionsApply from "../../../../components/SellerAuctionsApply";
import { useRouter } from "next/dist/client/compat/router";
import { useEffect, useState } from "react";
import axios from "axios";
import AuctionAddForm from "../../../../components/AuctionAddForm";
import {use} from "express/lib/router";

const Auctions = () => {
    const router = useRouter();
    const [items, setItems] = useState([]);
    const [itemId, setItemId] = useState(-1);
    const [showNewAuction, setShowNewAuction] = useState(false);
    const [auctionSuccess, setAuctionSuccess] = useState(false);
    const [userId, setUserId] = useState(-1);

    useEffect(() => {
        const expirationTime = sessionStorage.getItem("expiration_time");
        const userType = sessionStorage.getItem("user_type");
        const userId = sessionStorage.getItem("user_id");

        setUserId(userId);

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
                    router.push("/posts/sellers/purchasing/auctions");
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

        async function fetchData() {
            try {
                console.log(userId);
                const responseItems = await axios.post(
                    "http://localhost:8888/get_seller_items.php",
                    { user_id: userId }
                );

                if (responseItems.status !== 200) {
                    throw new Error("Erreur lors de la requête.");
                }

                console.log(responseItems.data);
                setItems(responseItems.data);
            } catch (error) {
                console.error("An error occurred while fetching the users:", error);
            }
        }

        fetchData();
    }, []);

    const handleApplyAuction = (itemId) => {
        console.log(userId);
        setItemId(itemId);
        setShowNewAuction(true);
    };

    const handleAuctionClose = () => {
        setShowNewAuction(false);
        setAuctionSuccess(false);
    };

    return (
        <>
            <div className={"main-content"}>
                <Layout />
                <NavbarSellers />
                <span className={"homeTitle"}>AUCTIONS</span>
                <span className={"homeDescription"}>
          Take advantage of our 'Auctions' feature as a seller, where you can
          list unique items for bidding within a specific timeframe, creating
          excitement and competition among interested buyers.
        </span>
                <div className={"arrows"}>
                    <Image
                        src="/../public/img/arrow1.png"
                        height={265.5}
                        width={181.31}
                        alt={"arrow1"}
                    />
                    <Image
                        src="/../public/img/arrow2.png"
                        height={265.5}
                        width={181.31}
                        alt={"arrow2"}
                    />
                </div>
                <div className={"productTextcontent"}>
                    <span>APPLY AUCTIONS TO EXISTING PRODUCTS</span>
                </div>
                <div className={"auctionsSeller"}>
                    {items.map((item) => (
                        <div className="card" key={item.id}>
                            <SellerAuctionsApply
                                srcImage={item.src_image}
                                productName={item.name}
                                productPrice={item.price_items}
                                productDescription={item.description}
                                productAuction={item.auction_items}
                                onApply={() => handleApplyAuction(item.id)}
                            />
                        </div>
                    ))}
                </div>

                {showNewAuction && (
                    <AuctionAddForm
                        onClose={handleAuctionClose}
                        itemId={itemId}
                        seller_id={userId}
                        auctionSuccess={auctionSuccess}
                    />
                )}
            </div>
            <FooterSellers />
        </>
    );
};

export default Auctions;
