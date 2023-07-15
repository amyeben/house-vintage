import Image from 'next/image';
import NavBar from "../components/NavBar";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import ProductPresentation from "../components/ProductPresentation";
import SummerDiscount from "../components/SummerDiscount";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/dist/client/compat/router";

const Home = () => {
    const router = useRouter();

    function getLoginPage() {
        router.push("/login");
    }

    const [trendingItems, setTrendingItems] = useState([]);
    const [featuredItems, setFeaturedItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post("http://localhost:8888/get_homecard_items.php");

                if (response.status !== 200) {
                    throw new Error("Erreur lors de la requête.");
                }

                setTrendingItems(response.data.firstTenItems);
                setFeaturedItems(response.data.lastTenItems);
            } catch (error) {
                console.error("An error occurred while fetching the items:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="main-content">
                <Layout />
                <NavBar />
                <span className="homeTitle">THE VINTAGE HOUSE</span>
                <span className="homeDescription">Step into the past with our exquisite vintage collection! Discover timeless fashion and unique treasures at our vintage store.</span>
                <div className="arrows">
                    <Image src="/../public/img/arrow1.png" height={265.5} width={181.31} alt="arrow1" />
                    <Image src="/../public/img/arrow2.png" height={265.5} width={181.31} alt="arrow2" />
                </div>


                <span className="pageMiniTitle">TRENDING ON THE VINTAGE HOUSE</span>
                <div className="homePageCards1">
                    {trendingItems.map((item) => (
                        <ProductPresentation
                            key={item.id}
                            srcImage={item.src_image}
                            id={item.id}
                            articleName={item.name}
                            articlePrice={item.price_items}
                            getLoginPage={() => getLoginPage()}
                        />
                    ))}
                </div>
                <SummerDiscount />
                <span className="pageMiniTitle">DISCOVER OUR PRODUCTS</span>
                <div className="homePageCards2">
                    {featuredItems.map((item) => (
                        <ProductPresentation
                            key={item.id}
                            srcImage={item.src_image}
                            id={item.id}
                            articleName={item.name}
                            articlePrice={item.price_items}
                            getLoginPage={() => getLoginPage()}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
