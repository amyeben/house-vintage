import Layout from "../../../../components/Layout";
import NavbarUser from "../../../../components/NavBarUser";
import Image from "next/image";

const MyaccountSellers = () => {
    return (
        <>
            <div className={"main-content"}>
                <Layout />
                <NavbarUser />
                <div className={"sellerMA"}>
                    <div className={"sellerMA1"}>
                        <span>THE VINTAGE HOUSE</span>
                        <span>SELLER</span>
                        <Image
                            src={"/img/bubble.png"}
                            height={138}
                            width={138}
                            alt={"bubble"}
                        />
                        <p>NOM</p>
                        <p>PRENOM</p>
                    </div>
                    <div className={"sellerMA2"}>
                        <span>MY INFORMATIONS</span>
                        <div className={"row"}>
                            <div>
                                <span>EMAIL: XXXXXXXXXXXXXX@XXXXXXXX.COM</span><br />
                            </div>
                            <div>
                                <span>ADDRESS: XXXXXXXXXXXXXXXXXXXXXXXXXX</span><br />
                            </div>
                            <div>
                                <span>ITEMS: X</span><br />
                            </div>
                            <div>
                                <span>SOLD PRODUCT: X</span>
                            </div>


                                <div><button>DELETE MY ACCOUNT</button></div>
                            </div>
                        </div>
                </div></div>

        </>
    )
}; export default MyaccountSellers;