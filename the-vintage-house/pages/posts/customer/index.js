import Layout from "../../../components/Layout";
import FooterUser from "../../../components/FooterUser";
import NavBar from "../../../components/NavBar";
import Image from "next/image";
import ProductPresentation from "../../../components/ProductPresentation";
import SummerDiscount from "../../../components/SummerDiscount";
import NavbarUser from "../../../components/NavBarUser";

export default function Customer() {

    return (<>

        <div className={"main-content"}>
            <Layout />
            <NavbarUser />
            <span className={"homeTitle"}>THE VINTAGE HOUSE</span>
            <span className={"homeDescription"}>Step into the past with our exquisite vintage collection! Discover timeless fashion and unique treasures at our vintage store.</span>
            <div className={"arrows"}>
                <Image src="/../public/img/arrow1.png" height={265.5} width={181.31} alt={"arrow1"}/>
                <Image src="/../public/img/arrow2.png" height={265.5} width={181.31} alt={"arrow2"}/>
            </div>
            <fieldset>
                <legend>THE VINTAGE HOUSE</legend>
                <p>We are delighted to welcome you to our vintage world. Explore our unique selection of vintage treasures and immerse yourself in a charming and elegant retro atmosphere.<br /><br />

                    At The Vintage House, we are passionate about objects that tell a story. Each piece we offer has been carefully chosen for its timeless beauty and authenticity. Whether you're looking for vintage furniture, decorative accessories, or collectibles, we have what you need.<br /><br />

                    We take pride in providing you with a pleasant and inspiring shopping experience. Our team is here to guide you and answer any questions you may have. We want your visit to be a moment of discovery and enjoyment.<br /><br />

                    Whether you're a passionate collector, a retro design enthusiast, or simply searching for that special item to enhance your space, The Vintage House is the perfect place to find your happiness.<br /><br />

                    Immerse yourself in the vintage world with us and be captivated by the magic of the past. We hope you will find unique pieces at The Vintage House that will bring you joy.

                    Welcome to The Vintage House, where classic style meets vintage soul.</p>
            </fieldset>

            <span className={"pageMiniTitle"}>TRENDING ON THE VINTAGE HOUSE</span>
            <div className={"homePageCards1"}>
                <ProductPresentation srcImage={"/../public/img/imgPants/pants.png"} id={1} articleName={"Pants 1"} articlePrice={"182£"}/>
                <ProductPresentation srcImage={"/../public/img/imgPants/pant2.png"} id={2} articleName={"Pants 2"} articlePrice={"145£"}/>
                <ProductPresentation srcImage={"/../public/img/imgPants/pant3.png"} id={3} articleName={"Pants 3"} articlePrice={"725£"}/>
                <ProductPresentation srcImage={"/../public/img/imgPants/pants.png"} id={4} articleName={"Pants 4"} articlePrice={"12£"}/>
                <ProductPresentation srcImage={"/../public/img/imgPants/pant2.png"} id={5} articleName={"Pants 5"} articlePrice={"245£"}/>
                <ProductPresentation srcImage={"/../public/img/imgPants/pant3.png"} id={6} articleName={"Pants 6"} articlePrice={"765£"}/>
                <ProductPresentation srcImage={"/../public/img/imgPants/pants.png"} id={7} articleName={"Pants 7"} articlePrice={"932£"}/>
                <ProductPresentation srcImage={"/../public/img/imgPants/pant2.png"} id={8} articleName={"Pants 8"} articlePrice={"225£"}/>
                <ProductPresentation srcImage={"/../public/img/imgPants/pant3.png"} id={9} articleName={"Pants 9"} articlePrice={"75£"}/>
            </div>
            <SummerDiscount />
            <span className={"pageMiniTitle"}>DISCOVER OUR PRODUCTS</span>
            <div className={"homePageCards2"}>
                <ProductPresentation srcImage={"/../public/img/imgAccessories/necklace1.webp"} id={1} articleName={"Article 1"} articlePrice={"12£"}/>
                <ProductPresentation srcImage={"/../public/img/imgBooksAndMagasine/book1.png"} id={2} articleName={"Article 2"} articlePrice={"15£"}/>
                <ProductPresentation srcImage={"/../public/img/imgClothing/imgJacket/jacket3.jpeg"} id={3} articleName={"Article 3"} articlePrice={"75£"}/>
                <ProductPresentation srcImage={"/../public/img/imgClothing/imgPants/pant3.png"} id={4} articleName={"Article 4"} articlePrice={"1£"}/>
                <ProductPresentation srcImage={"/../public/img/imgClothing/imgTShirt/tshirt2.png"} id={5} articleName={"Article 5"} articlePrice={"45£"}/>
                <ProductPresentation srcImage={"/../public/img/imgElectronics/camera.png"} id={6} articleName={"Article 6"} articlePrice={"75£"}/>
                <ProductPresentation srcImage={"/../public/img/imgFootwear/fw2.png"} id={7} articleName={"Article 7"} articlePrice={"93£"}/>
                <ProductPresentation srcImage={"/../public/img/imgAccessories/necklace5.png"} id={8} articleName={"Article 8"} articlePrice={"25£"}/>
                <ProductPresentation srcImage={"/../public/img/imgBooksAndMagasine/manga5.png"} id={9} articleName={"Article 9"} articlePrice={"75£"}/>
            </div>



        </div>
        <FooterUser />


    </>)

}