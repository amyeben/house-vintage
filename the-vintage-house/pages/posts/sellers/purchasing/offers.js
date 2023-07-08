import Layout from "../../../../components/Layout";
import NavbarSellers from "../../../../components/NavBarSellers";
import Image from "next/image";
import FooterSellers from "../../../../components/FooterSellers";
import SellerOffers from "../../../../components/SellerOffers";

const Offers = () => {

    return(<>
        <div className={"main-content"}>
            <Layout />
            <NavbarSellers />
            <span className={"homeTitle"}>OFFERS</span>
            <span className={"homeDescription"}>At The Vintage House, 'Best Offer' empowers sellers to negotiate and agree on the final selling price with potential buyers, providing flexibility and maximizing the chances of a successful sale.</span>
            <div className={"arrows"}>
                <Image src="/../public/img/arrow1.png" height={265.5} width={181.31} alt={"arrow1"}/>
                <Image src="/../public/img/arrow2.png" height={265.5} width={181.31} alt={"arrow2"}/>
            </div>
            <div className={"productTextcontent"}>
                <span>ACCEPT OR REFUSE THESE OFFERS !</span>
            </div>
            <div className={"offersSeller"}>
                <div className="card">
                <SellerOffers customerEmail={"ebenamy@yahoo.fr"} date={"08/09/2023"} productName={"Miraculous ED1"} offernumber={'4'} offerquantity={20} offerPrice={"120£"} />
                </div>
                <div className="card">
                    <SellerOffers customerEmail={"ebenamy@yahoo.fr"} date={"08/09/2023"} productName={"Miraculous ED1"} offernumber={'4'} offerquantity={20} offerPrice={"120£"} />
                </div>
                <div className="card">
                    <SellerOffers customerEmail={"ebenamy@yahoo.fr"} date={"08/09/2023"} productName={"Miraculous ED1"} offernumber={'4'} offerquantity={20} offerPrice={"120£"} />
                </div>
                <div className="card">
                    <SellerOffers customerEmail={"ebenamy@yahoo.fr"} date={"08/09/2023"} productName={"Miraculous ED1"} offernumber={'4'} offerquantity={20} offerPrice={"120£"} />
                </div>
                <div className="card">
                    <SellerOffers customerEmail={"ebenamy@yahoo.fr"} date={"08/09/2023"} productName={"Miraculous ED1"} offernumber={'4'} offerquantity={20} offerPrice={"120£"} />
                </div>
                <div className="card">
                    <SellerOffers customerEmail={"ebenamy@yahoo.fr"} date={"08/09/2023"} productName={"Miraculous ED1"} offernumber={'4'} offerquantity={20} offerPrice={"120£"} />
                </div>
                <div className="card">
                    <SellerOffers customerEmail={"ebenamy@yahoo.fr"} date={"08/09/2023"} productName={"Miraculous ED1"} offernumber={'4'} offerquantity={20} offerPrice={"120£"} />
                </div>
                <div className="card">
                    <SellerOffers customerEmail={"ebenamy@yahoo.fr"} date={"08/09/2023"} productName={"Miraculous ED1"} offernumber={'4'} offerquantity={20} offerPrice={"120£"} />
                </div>
                <div className="card">
                    <SellerOffers customerEmail={"ebenamy@yahoo.fr"} date={"08/09/2023"} productName={"Miraculous ED1"} offernumber={'4'} offerquantity={20} offerPrice={"120£"} />
                </div>
                <div className="card">
                    <SellerOffers customerEmail={"ebenamy@yahoo.fr"} date={"08/09/2023"} productName={"Miraculous ED1"} offernumber={'4'} offerquantity={20} offerPrice={"120£"} />
                </div>
                <div className="card">
                    <SellerOffers customerEmail={"ebenamy@yahoo.fr"} date={"08/09/2023"} productName={"Miraculous ED1"} offernumber={'4'} offerquantity={20} offerPrice={"120£"} />
                </div>
                <div className="card">
                    <SellerOffers customerEmail={"ebenamy@yahoo.fr"} date={"08/09/2023"} productName={"Miraculous ED1"} offernumber={'4'} offerquantity={20} offerPrice={"120£"} />
                </div>
                <div className="card">
                    <SellerOffers customerEmail={"ebenamy@yahoo.fr"} date={"08/09/2023"} productName={"Miraculous ED1"} offernumber={'4'} offerquantity={20} offerPrice={"120£"} />
                </div>

            </div>

        </div>
        <FooterSellers />


    </>);
}
export default Offers;