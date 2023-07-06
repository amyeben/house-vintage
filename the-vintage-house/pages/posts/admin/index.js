import {useState} from "react";
import NavbarAdmin from "../../../components/NavBarAdmin";
import Layout from "../../../components/Layout";
import Image from "next/image";

export default function Admin() {
    const [activeDiv, setActiveDiv] = useState("divAdminCustomer");

    const handleClick = (divName) => {
        setActiveDiv(divName);
    };

    return (
        <>
            <div className={"main-content, admin-page"}>
                <Layout />
                <NavbarAdmin />
                <div className={"adminPageDiv"}>
                    <div className={"divAdminH"}>
                        <span>THE VINTAGE HOUSE</span>
                        <Image
                            src={"/img/bubble.png"}
                            height={138}
                            width={138}
                            alt={"bubble"}
                        />
                        <p>ADMIN</p>
                    </div>
                    <div className={"carouselDiv"}>
                        <div className={"divUsers"}>
                            <div className={"divAdminCustomer" + (activeDiv === "divAdminCustomer" ? " active" : "")}>
                                <p>Div Admin CUSTOMER</p>
                            </div>
                            <div className={"divAdminSellers" + (activeDiv === "divAdminSellers" ? " active" : "")}>
                                <p>Div Admin SELLERS</p>
                            </div>
                            <div className={"divAdminProducts" + (activeDiv === "divAdminProducts" ? " active" : "")}>
                                <p>Div Admin PRODUCTS</p>
                            </div>
                        </div>
                        <div className="buttonContainer">
                            <button onClick={() => handleClick("divAdminCustomer")} className={activeDiv === "divAdminCustomer" ? "active" : ""}>Customer</button>
                            <button onClick={() => handleClick("divAdminSellers")} className={activeDiv === "divAdminSellers" ? "active" : ""}>Sellers</button>
                            <button onClick={() => handleClick("divAdminProducts")} className={activeDiv === "divAdminProducts" ? "active" : ""}>Products</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
