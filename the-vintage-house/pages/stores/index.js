import Layout from "../../components/Layout";
import Image from "next/image";
import ProductPresentation from "../../components/ProductPresentation";
import ProductPresentationAuction from "../../components/ProductPresentationAuction";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const Store = () => {

    return(
        <>
            <div className={"main-content"}>
                <Layout />
                <NavBar />
                <span className={"homeTitle"}>STORE</span>
                <span className={"homeDescription"}>Step into the past with our exquisite vintage collection! Discover timeless fashion and unique treasures at our vintage store.</span>
                <div className={"arrows"}>
                    <Image src="/../public/img/arrow1.png" height={265.5} width={181.31} alt={"arrow1"}/>
                    <Image src="/../public/img/arrow2.png" height={265.5} width={181.31} alt={"arrow2"}/>
                </div>
                <div className="fieldsetContainer">
                    <fieldset>
                        <legend id={"auctions"}>#AUCTIONS</legend>
                        <p>FROM XX/XX/XXXX TO XX/XX/XXXX</p>
                        <div className={"storeAuctionsCard"}>
                            <ProductPresentationAuction srcImage={"/../public/img/imgElectronics/camera.png"} id={1} articleName={"Article 1"} articlePrice={"34£"} />
                            <ProductPresentationAuction srcImage={"/../public/img/imgElectronics/console.webp"} id={1} articleName={"Article 2"} articlePrice={"34£"} />
                            <ProductPresentationAuction srcImage={"/../public/img/imgElectronics/recordplayer.png"} id={1} articleName={"Article 3"} articlePrice={"34£"} />
                            <ProductPresentationAuction srcImage={"/../public/img/imgElectronics/telephone.png"} id={1} articleName={"Article 4"} articlePrice={"34£"} />
                            <ProductPresentationAuction srcImage={"/../public/img/imgElectronics/typewriters.png"} id={1} articleName={"Article 5"} articlePrice={"3664£"} />
                        </div>
                    </fieldset></div>
                <div className="fieldsetContainer">
                    <fieldset>
                        <legend id={"clothing"}>#CLOTHING</legend>
                        <div className={"storeClothingCard"}>
                            <ProductPresentation srcImage={"/../public/img/imgClothing/imgJacket/jacket1.webp"} id={1} articleName={"Article 1"} articlePrice={"34£"} />
                            <ProductPresentation srcImage={"/../public/img/imgClothing/imgJacket/jacket2.webp"} id={1} articleName={"Article 2"} articlePrice={"34£"} />
                            <ProductPresentation srcImage={"/../public/img/imgClothing/imgJacket/jacket3.jpeg"} id={1} articleName={"Article 3"} articlePrice={"34£"} />
                            <ProductPresentation srcImage={"/../public/img/imgClothing/imgPants/pant2.png"} id={1} articleName={"Article 4"} articlePrice={"34£"} />
                            <ProductPresentation srcImage={"/../public/img/imgClothing/imgPants/pant3.png"} id={1} articleName={"Article 5"} articlePrice={"34£"} />
                            <ProductPresentation srcImage={"/../public/img/imgClothing/imgPants/pants.png"} id={1} articleName={"Article 6"} articlePrice={"34£"} />
                            <ProductPresentation srcImage={"/../public/img/imgClothing/imgTShirt/tshirt1.webp"} id={1} articleName={"Article 7"} articlePrice={"34£"} />
                            <ProductPresentation srcImage={"/../public/img/imgClothing/imgTShirt/tshirt2.png"} id={1} articleName={"Article 8"} articlePrice={"34£"} />
                            <ProductPresentation srcImage={"/../public/img/imgClothing/imgTShirt/tshirt3.webp"} id={1} articleName={"Article 9"} articlePrice={"34£"} />
                        </div>
                    </fieldset>
                </div>

                <div className="fieldsetContainer">
                    <fieldset>
                        <legend id={"accessories"}>#ACCESSORIES</legend>
                        <div className={"storeAccessoriesCard"}>
                            <ProductPresentation srcImage={"/../public/img/imgAccessories/necklace1.webp"} id={1} articleName={"Article 1"} articlePrice={"34£"} />
                            <ProductPresentation srcImage={"/../public/img/imgAccessories/necklace2.webp"} id={1} articleName={"Article 2"} articlePrice={"34£"} />
                            <ProductPresentation srcImage={"/../public/img/imgAccessories/necklace3.png"} id={1} articleName={"Article 3"} articlePrice={"34£"} />
                            <ProductPresentation srcImage={"/../public/img/imgAccessories/necklace4.png"} id={1} articleName={"Article 4"} articlePrice={"34£"} />
                            <ProductPresentation srcImage={"/../public/img/imgAccessories/necklace5.png"} id={1} articleName={"Article 5"} articlePrice={"34£"} />
                        </div>
                    </fieldset></div>
                <div className="fieldsetContainer">
                    <fieldset>
                        <legend id={"footwear"}>#FOOTWEAR</legend>
                        <div className={"storeFootwearCard"}>
                            <ProductPresentation srcImage={"/../public/img/imgFootwear/fw1.webp"} id={1} articleName={"Article 1"} articlePrice={"34£"} />
                            <ProductPresentation srcImage={"/../public/img/imgFootwear/fw2.png"} id={1} articleName={"Article 2"} articlePrice={"34£"} />
                            <ProductPresentation srcImage={"/../public/img/imgFootwear/fw3.png"} id={1} articleName={"Article 3"} articlePrice={"34£"} />
                            <ProductPresentation srcImage={"/../public/img/imgFootwear/fw4.webp"} id={1} articleName={"Article 4"} articlePrice={"34£"} />
                            <ProductPresentation srcImage={"/../public/img/imgFootwear/fw5.png"} id={1} articleName={"Article 5"} articlePrice={"34£"} />
                        </div>
                    </fieldset></div>
                <div className="fieldsetContainer">
                    <fieldset>
                        <legend id={"books"}>#BOOKS AND MAGASINES</legend>
                        <div className={"storeBooksCard"}>
                            <ProductPresentation srcImage={"/../public/img/imgBooksAndMagasine/book1.png"} id={1} articleName={"Article 1"} articlePrice={"34£"} />
                            <ProductPresentation srcImage={"/../public/img/imgBooksAndMagasine/book2.png"} id={1} articleName={"Article 2"} articlePrice={"34£"} />
                            <ProductPresentation srcImage={"/../public/img/imgBooksAndMagasine/map3.png"} id={1} articleName={"Article 3"} articlePrice={"34£"} />
                            <ProductPresentation srcImage={"/../public/img/imgBooksAndMagasine/manga4.jpeg"} id={1} articleName={"Article 4"} articlePrice={"34£"} />
                            <ProductPresentation srcImage={"/../public/img/imgBooksAndMagasine/manga5.png"} id={1} articleName={"Article 5"} articlePrice={"34£"} />
                        </div>
                    </fieldset></div>
                <div className="fieldsetContainer">
                    <fieldset>
                        <legend id={"electronics"}>#ELECTRONICS</legend>
                        <div className={"storeElectronicsCard"}>
                            <ProductPresentation srcImage={"/../public/img/imgElectronics/camera.png"} id={1} articleName={"Article 1"} articlePrice={"34£"} />
                            <ProductPresentation srcImage={"/../public/img/imgElectronics/console.webp"} id={1} articleName={"Article 2"} articlePrice={"34£"} />
                            <ProductPresentation srcImage={"/../public/img/imgElectronics/recordplayer.png"} id={1} articleName={"Article 3"} articlePrice={"34£"} />
                            <ProductPresentation srcImage={"/../public/img/imgElectronics/telephone.png"} id={1} articleName={"Article 4"} articlePrice={"34£"} />
                            <ProductPresentation srcImage={"/../public/img/imgElectronics/typewriters.png"} id={1} articleName={"Article 5"} articlePrice={"3664£"} />
                        </div>
                    </fieldset></div>




            </div>
            <Footer />

        </>
    );
}
export default Store;
