import Layout from "../../../components/Layout";
import FooterUser from "../../../components/FooterUser";
import NavBar from "../../../components/NavBar";
import Image from "next/image";
import ProductPresentation from "../../../components/ProductPresentation";
import SummerDiscount from "../../../components/SummerDiscount";
import NavbarUser from "../../../components/NavBarUser";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/dist/client/compat/router";

export default function Customer() {
    const router = useRouter();

    useEffect(() => {
        const expirationTime = sessionStorage.getItem("expiration_time");
        const userType = sessionStorage.getItem("user_type");

        if (!userType || (expirationTime && Date.now() > parseInt(expirationTime))) {
            router.push("/login");
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
    }, []);

    const [firstTenItems, setFirstTenItems] = useState([]);
    const [lastTenItems, setLastTenItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post("http://localhost:8888/get_homecard_items.php");

                if (response.status !== 200) {
                    throw new Error("Erreur lors de la requête.");
                }

                setFirstTenItems(response.data.firstTenItems);
                setLastTenItems(response.data.lastTenItems);
            } catch (error) {
                console.error("An error occurred while fetching the items:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className={"main-content"}>
                <Layout />
                <NavbarUser />
                <span className={"homeTitle"}>THE VINTAGE HOUSE</span>
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
                <fieldset>
                    <legend>THE VINTAGE HOUSE</legend>
                    <p>
                        We are delighted to welcome you to our vintage world. Explore our
                        unique selection of vintage treasures and immerse yourself in a
                        charming and elegant retro atmosphere.
                        <br />
                        <br />
                        At The Vintage House, we are passionate about objects that tell a
                        story. Each piece we offer has been carefully chosen for its
                        timeless beauty and authenticity. Whether you're looking for
                        vintage furniture, decorative accessories, or collectibles, we have
                        what you need.
                        <br />
                        <br />
                        We take pride in providing you with a pleasant and inspiring
                        shopping experience. Our team is here to guide you and answer any
                        questions you may have. We want your visit to be a moment of
                        discovery and enjoyment.
                        <br />
                        <br />
                        Whether you're a passionate collector, a retro design enthusiast, or
                        simply searching for that special item to enhance your space, The
                        Vintage House is the perfect place to find your happiness.
                        <br />
                        <br />
                        Immerse yourself in the vintage world with us and be captivated by
                        the magic of the past. We hope you will find unique pieces at The
                        Vintage House that will bring you joy.
                        <br />
                        <br />
                        Welcome to The Vintage House, where classic style meets vintage
                        soul.
                    </p>
                </fieldset>

                <span className={"pageMiniTitle"}>TRENDING ON THE VINTAGE HOUSE</span>
                <div className={"homePageCards1"}>
                    {firstTenItems.map((item) => (
                        <ProductPresentation
                            srcImage={item.src_image}
                            id={item.id}
                            articleName={item.name}
                            articlePrice={item.price_items}
                        />
                    ))}
                </div>
                <SummerDiscount />
                <span className={"pageMiniTitle"}>DISCOVER OUR PRODUCTS</span>
                <div className={"homePageCards2"}>
                    {lastTenItems.map((item) => (
                        <ProductPresentation
                            srcImage={item.src_image}
                            id={item.id}
                            articleName={item.name}
                            articlePrice={item.price_items}
                        />
                    ))}
                </div>
            </div>
            <FooterUser />
        </>
    );
}
