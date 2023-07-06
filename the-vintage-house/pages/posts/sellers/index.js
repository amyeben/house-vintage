import Layout from "../../../components/Layout";
import NavBar from "../../../components/NavBar";
import NavbarSellers from "../../../components/NavBarSellers";
import Image from "next/image";
import ProductPresentation from "../../../components/ProductPresentation";
import SummerDiscount from "../../../components/SummerDiscount";
import FooterSellers from "../../../components/FooterSellers";

export default function Sellers() {

    return (<>

        <div className={"main-content"}>
            <Layout />
            <NavbarSellers />
            <span className={"homeTitle"}>THE VINTAGE HOUSE</span>
            <span className={"homeDescription"}>Unlock the potential of your vintage treasures! Join our seller community and showcase your unique collection to vintage enthusiasts around the world.</span>
            <div className={"arrows"}>
                <Image src="/../public/img/arrow1.png" height={265.5} width={181.31} alt={"arrow1"}/>
                <Image src="/../public/img/arrow2.png" height={265.5} width={181.31} alt={"arrow2"}/>
            </div>


        </div>
        <FooterSellers />


    </>)

}