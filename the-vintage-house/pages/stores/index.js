import Layout from "../../components/Layout";
import Image from "next/image";
import ProductPresentation from "../../components/ProductPresentation";
import ProductPresentationAuction from "../../components/ProductPresentationAuction";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { useRouter } from "next/dist/client/compat/router";
import { useEffect, useState } from "react";
import axios from "axios";

const Store = () => {
    const router = useRouter();
    const [showAlert, setShowAlert] = useState(false);
    const [products, setProducts] = useState({
        auctions: [],
        clothing: [],
        accessories: [],
        footwear: [],
        electronics: [],
        books: [],
    });

    function handleShowAlert() {
        console.log("ALERT");
        setShowAlert(true);
    }

    function handleHideAlert() {
        setShowAlert(false);
    }

    useEffect(() => {
        const expirationTime = sessionStorage.getItem("expiration_time");
        const userType = sessionStorage.getItem("user_type");

        if (!userType || (expirationTime && Date.now() > parseInt(expirationTime))) {
            //router.push('/stores');
        } else {
            switch (userType) {
                case "customer":
                    router.push("/posts/customer");
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
    }, []);

    return (
        <>
            <div className={"main-content"}>
                <Layout />
                <NavBar />
                <span className={"homeTitle"}>STORE</span>
                <span className={"homeDescription"}>
          Step into the past with our exquisite vintage collection! Discover
          timeless fashion and unique treasures at our vintage store.
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

                <div className="fieldsetContainer">
                    <fieldset>
                        <legend id={"clothing"}>#CLOTHING</legend>
                        <div className={"storeClothingCard"}>
                            {products.clothing.map((product) => (
                                <ProductPresentation
                                    key={product.id}
                                    srcImage={product.src_image}
                                    id={product.id}
                                    articleName={product.name}
                                    articlePrice={product.price_items}
                                    div={() => handleShowAlert()}
                                />
                            ))}
                        </div>
                    </fieldset>
                </div>
                <div className="fieldsetContainer">
                    <fieldset>
                        <legend id={"accessories"}>#ACCESSORIES</legend>
                        <div className={"storeAccessoriesCard"}>
                            {products.accessories.map((product) => (
                                <ProductPresentation
                                    key={product.id}
                                    srcImage={product.src_image}
                                    id={product.id}
                                    articleName={product.name}
                                    articlePrice={product.price_items}
                                    div={() => handleShowAlert()}
                                />
                            ))}
                        </div>
                    </fieldset>
                </div>
                <div className="fieldsetContainer">
                    <fieldset>
                        <legend id={"footwear"}>#FOOTWEAR</legend>
                        <div className={"storeFootwearCard"}>
                            {products.footwear.map((product) => (
                                <ProductPresentation
                                    key={product.id}
                                    srcImage={product.src_image}
                                    id={product.id}
                                    articleName={product.name}
                                    articlePrice={product.price_items}
                                    div={() => handleShowAlert()}
                                />
                            ))}
                        </div>
                    </fieldset>
                </div>
                <div className="fieldsetContainer">
                    <fieldset>
                        <legend id={"books"}>#BOOKS AND MAGASINES</legend>
                        <div className={"storeBooksCard"}>
                            {products.books.map((product) => (
                                <ProductPresentation
                                    key={product.id}
                                    srcImage={product.src_image}
                                    id={product.id}
                                    articleName={product.name}
                                    articlePrice={product.price_items}
                                    div={() => handleShowAlert()}
                                />
                            ))}
                        </div>
                    </fieldset>
                </div>
                <div className="fieldsetContainer">
                    <fieldset>
                        <legend id={"electronics"}>#ELECTRONICS</legend>
                        <div className={"storeElectronicsCard"}>
                            {products.electronics.map((product) => (
                                <ProductPresentation
                                    key={product.id}
                                    srcImage={product.src_image}
                                    id={product.id}
                                    articleName={product.name}
                                    articlePrice={product.price_items}
                                    div={() => handleShowAlert()}
                                />
                            ))}
                        </div>
                    </fieldset>
                </div>
            </div>
            <Footer />

            {showAlert && (
                <div className="alert-overlay">
                    <div className="alert-content">
                        <span className="alert-title">You have to register if you want to buy something!</span>
                        <button className="alert-button" onClick={() => router.push('/suscribe')}>
                            Register
                        </button>
                        <span className="close-button" onClick={handleHideAlert}>
              &times;
            </span>
                    </div>
                </div>
            )}
        </>
    );
};

export default Store;
