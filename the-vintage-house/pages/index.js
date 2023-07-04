import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navbar from "../components/NavBar";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import ProductPresentation from "../components/ProductPresentation";
import SummerDiscount from "../components/SummerDiscount";
import {Head} from "next/document";

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (<>

      <div className={"main-content"}>
          <Layout />
          <Navbar />
          <span className={"homeTitle"}>THE VINTAGE HOUSE</span>
          <span className={"homeDescription"}>Step into the past with our exquisite vintage collection! Discover timeless fashion and unique treasures at our vintage store.</span>
          <div className={"arrows"}>
              <Image src="/../public/img/arrow1.png" height={265.5} width={181.31} />
              <Image src="/../public/img/arrow2.png" height={265.5} width={181.31} />
          </div>

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


      </div>
          <Footer />


      </>
  )
}
