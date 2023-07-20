import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Layout from "../../../../components/Layout";
import NavbarUser from "../../../../components/NavBarUser";
import Image from "next/image";
import ProductPresentation from "../../../../components/ProductPresentation";
import FooterUser from "../../../../components/FooterUser";
import BuyAlert from "../../../../components/BuyAlert";
import Cart from "../../../../components/Cart";
import MakeOffer from "../../../../components/MakeOffer";
import ProductPresentationAuction from "../../../../components/ProductPresentationAuction";
import OfferAuction from "../../../../components/OfferAuction";

const StoreCustomer = () => {
    const router = useRouter();
    const [products, setProducts] = useState({
        auctions: [],
        clothing: [],
        accessories: [],
        footwear: [],
        electronics: [],
        books: [],
    });

    const [showAlert, setShowAlert] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedTitle, setSelectedTitle] = useState(null);
    const [selectedDescription, setSelectedDescription] = useState(null);
    const [selectedSrcImage, setSelectedSrcImage] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [auctions, setAuctions] = useState([]);
    const [auctionId, setAuctionId] = useState(-1);

    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const [showMakeOffer, setShowMakeOffer] = useState(false);
    const [offerSuccess, setOfferSuccess] = useState(false);
    const [offerLimit, setOfferLimit] = useState(false);
    const [showOfferAuction, setOfferAuction] = useState(false);
    const [offerAuctionSuccess, setOfferAuctionSuccess] = useState(false);
    const [offerAuctionLimit, setOfferAuctionLimit] = useState(false);

    const handleAddToCart = (
        item,
        title,
        category,
        description,
        src_image,
        price
    ) => {
        const userId = sessionStorage.getItem("user_id");

        const newCartItem = {
            item: item,
            name: title,
            category: category,
            description: description,
            src_image: src_image,
            price: price,
            quantity: quantity,
            totalPrice: quantity * parseFloat(price),
        };

        setCartItems([...cartItems, newCartItem]);

        setShowAlert(false);
        setShowCart(true);
    };

    useEffect(() => {
        const expirationTime = sessionStorage.getItem("expiration_time");
        const userType = sessionStorage.getItem("user_type");

        if (
            !userType ||
            (expirationTime && Date.now() > parseInt(expirationTime))
        ) {
            router.push("/login");
        } else {
            switch (userType) {
                case "customer":
                    router.push("/posts/customer/store");
                    break;
                case "seller":
                    router.push("/posts/sellers");
                    break;
                case "admin":
                    router.push("/posts/admin");
                    break;
                default:
                    router.push("/error");
                    break;
            }
        }

        axios
            .get("http://localhost:8888/get_store_items.php")
            .then((response) => {
                const sortedProducts = response.data;
                setProducts(sortedProducts);
            })
            .catch((error) => console.log(error));

        axios
            .get("http://localhost:8888/get_auctions.php")
            .then((response) => {
                console.log(response.data);
                setAuctions(response.data);
                const auctionIds = response.data.map((auction) => auction.auction_id);
                console.log(auctionIds);
                setAuctionId(auctionIds);
            })
            .catch((error) => console.log(error));


        const processExpiredAuctions = async () => {
            try {
                const response = await axios.post(
                    "http://localhost:8888/process_expired_auctions.php"
                );
                console.log(response.data); // Affichez la réponse du serveur si nécessaire
            } catch (error) {
                console.log(error);
            }
        };

        processExpiredAuctions();

        const interval = setInterval(processExpiredAuctions, 60000); // Par exemple, toutes les 60 secondes

        return () => clearInterval(interval);
    }, []);


    const handleShowAlert = (
        itemId,
        title,
        category,
        description,
        src_image,
        price
    ) => {
        setSelectedItemId(itemId);
        setSelectedCategory(category);
        setSelectedDescription(description);
        setSelectedTitle(title);
        setSelectedSrcImage(src_image);
        setSelectedPrice(price);
        setShowAlert(true);
    };

    const handleClearCart = () => {
        setCartItems([]);
    };

    const handleMakeOfferSubmit = (itemId, offerValue) => {
        axios
            .post("http://localhost:8888/check_offer_limit.php", {
                customer_id: sessionStorage.getItem("user_id"),
                item_id: selectedItemId,
            })
            .then((response) => {
                if (response.data.offer_limit_reached || response.data.offer_limit_reached2) {
                    setOfferLimit(true);
                    setOfferSuccess(false);
                } else {
                    const dataOffer = {
                        customer_id: sessionStorage.getItem("user_id"),
                        item_id: parseInt(selectedItemId),
                        number_offer: parseFloat(response.data.number_of_offers) + 1,
                        quantity: parseInt(quantity),
                        price_offer: parseFloat(offerValue),
                    };

                    // Avoid cyclic references in dataOffer by not including unnecessary properties
                    const cleanDataOffer = {
                        customer_id: dataOffer.customer_id,
                        item_id: dataOffer.item_id,
                        number_offer: dataOffer.number_offer,
                        quantity: dataOffer.quantity,
                        date: dataOffer.date,
                        price_offer: dataOffer.price_offer
                    };

                    axios
                        .post("http://localhost:8888/make_an_offer.php", dataOffer)
                        .then(() => {
                            setOfferLimit(false);
                            setOfferSuccess(true);
                        })
                        .catch((error) => console.log(error));
                }
            })
            .catch((error) => console.log(error));
    };

    const handleMakeOfferA = (auctionIndex) => {
        const auctionId = auctions[auctionIndex].auction_id;
        setAuctionId(auctionId);
        setOfferAuction(true);
    };

    const handleMakeOfferAuction = (auctionEId, offerValue) => {
        const dataOffer = {
            customer_id: sessionStorage.getItem("user_id"),
            auction_id: parseInt(auctionId),
            quantity: parseInt(quantity),
            price_offer: parseFloat(offerValue),
        };

        axios
            .post("http://localhost:8888/make_an_offer_auction.php", dataOffer)
            .then(() => {
                setOfferAuctionSuccess(true);
                axios
                    .get("http://localhost:8888/get_auctions.php")
                    .then((response) => {
                        console.log(response.data);
                        setAuctions(response.data);
                        const auctionIds = response.data.map((auction) => auction.auction_id);
                        console.log(auctionIds);
                        setAuctionId(auctionIds);
                    })
                    .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
    };

    return (
        <>
            <div className={"main-content"}>
                <Layout />
                <NavbarUser />
                <span className={'homeTitle'}>STORE</span>
                <span className={'homeDescription'}>
          Step into the past with our exquisite vintage collection! Discover
          timeless fashion and unique treasures at our vintage store.
        </span>
                <div className={'arrows'}>
                    <Image src="/../public/img/arrow1.png" height={265.5} width={181.31} alt={'arrow1'} />
                    <Image src="/../public/img/arrow2.png" height={265.5} width={181.31} alt={'arrow2'} />
                </div>
                <div className="fieldsetContainer">
                    <fieldset>
                        <legend id={'auctions'}>#AUCTIONS</legend>
                        <div className={'storeAuctionsCard'}>
                            {auctions.map((auction, index) => (
                                <ProductPresentationAuction
                                    key={auction.id}
                                    srcImage={auction.src_image}
                                    id={auction.id}
                                    articleName={auction.name}
                                    articlePrice={auction.highest_offer}
                                    action={() => handleMakeOfferA(index)}
                                />
                            ))}
                        </div>
                    </fieldset>
                </div>

                <div className="fieldsetContainer">
                    <fieldset>
                        <legend id="clothing">#CLOTHING</legend>
                        <div className="storeClothingCard">
                            {products.clothing.map((product) => (
                                <ProductPresentation
                                    key={product.id}
                                    srcImage={product.src_image}
                                    id={product.id}
                                    articleName={product.name}
                                    articlePrice={product.price_items}
                                    div={() => handleShowAlert(product.id, product.name, product.categorie, product.description, product.src_image, product.price_items)}
                                />
                            ))}
                        </div>
                    </fieldset>
                </div>

                <div className="fieldsetContainer">
                    <fieldset>
                        <legend id="accessories">#ACCESSORIES</legend>
                        <div className="storeAccessoriesCard">
                            {products.accessories.map((product) => (
                                <ProductPresentation
                                    key={product.id}
                                    srcImage={product.src_image}
                                    id={product.id}
                                    articleName={product.name}
                                    articlePrice={product.price_items}
                                    div={() => handleShowAlert(product.id, product.name, product.categorie, product.description, product.src_image, product.price_items)}
                                />
                            ))}
                        </div>
                    </fieldset>
                </div>

                <div className="fieldsetContainer">
                    <fieldset>
                        <legend id="footwear">#FOOTWEAR</legend>
                        <div className="storeFootwearCard">
                            {products.footwear.map((product) => (
                                <ProductPresentation
                                    key={product.id}
                                    srcImage={product.src_image}
                                    id={product.id}
                                    articleName={product.name}
                                    articlePrice={product.price_items}
                                    div={() => handleShowAlert(product.id, product.name, product.categorie, product.description, product.src_image, product.price_items)}
                                />
                            ))}
                        </div>
                    </fieldset>
                </div>

                <div className="fieldsetContainer">
                    <fieldset>
                        <legend id="books">#BOOKS AND MAGAZINES</legend>
                        <div className="storeBooksCard">
                            {products.books.map((product) => (
                                <ProductPresentation
                                    key={product.id}
                                    srcImage={product.src_image}
                                    id={product.id}
                                    articleName={product.name}
                                    articlePrice={product.price_items}
                                    div={() => handleShowAlert(product.id, product.name, product.categorie, product.description, product.src_image, product.price_items)}
                                />
                            ))}
                        </div>
                    </fieldset>
                </div>

                <div className="fieldsetContainer">
                    <fieldset>
                        <legend id="electronics">#ELECTRONICS</legend>
                        <div className="storeElectronicsCard">
                            {products.electronics.map((product) => (
                                <ProductPresentation
                                    key={product.id}
                                    srcImage={product.src_image}
                                    id={product.id}
                                    articleName={product.name}
                                    articlePrice={product.price_items}
                                    div={() => handleShowAlert(product.id, product.name, product.categorie, product.description, product.src_image, product.price_items)}
                                />
                            ))}
                        </div>
                    </fieldset>
                </div>
            </div>
            <FooterUser />
            {showCart && (
                <Cart
                    cartItems={cartItems}
                    onClose={() => setShowCart(false)}
                    onClearCart={handleClearCart}
                />
            )}
            {showAlert && (
                <BuyAlert
                    itemId={selectedItemId}
                    onClose={() => setShowAlert(false)}
                    onAddtoCart={() =>
                        handleAddToCart(
                            selectedItemId,
                            selectedTitle,
                            selectedCategory,
                            selectedDescription,
                            selectedSrcImage,
                            selectedPrice
                        )
                    }
                    onMakeAnOffer={() => setShowMakeOffer(true)}
                    quantity={quantity}
                    setQuantity={setQuantity}
                />
            )}
            {showMakeOffer && (
                <MakeOffer
                    onClose={() => {setShowMakeOffer(false); setShowAlert(false); setOfferSuccess(false); setOfferLimit(false);}}
                    itemId={selectedItemId}
                    handleMakeOffer={handleMakeOfferSubmit}
                    offerSuccess={offerSuccess}
                    offerLimit={offerLimit}
                />
            )}

            {showOfferAuction && (<OfferAuction
                onClose={() => {setOfferAuction(false), setOfferAuctionSuccess(false)}}
                offerAuctionLimit={offerAuctionLimit}
                offerAuctionSuccess={offerAuctionSuccess}
                itemId={auctionId}
                handleMakeOffer={handleMakeOfferAuction}
            />)}

        </>
    );
};

export default StoreCustomer;
