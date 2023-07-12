import {useEffect, useState} from "react";
import NavbarAdmin from "../../../components/NavBarAdmin";
import Layout from "../../../components/Layout";
import Image from "next/image";
import AdminCustomerPan from "../../../components/AdminCustomerPan";
import AdminSellersPan from "../../../components/AdminSellersPan";
import AdminProductsPan from "../../../components/AdminProductsPan";
import {useRouter} from "next/dist/client/compat/router";

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
                                <button>ADD</button>
                                <div className={"admincustomerPanCard"}>
                                    <div className={"admincustomerPanCardScroll"}>
                                        <AdminCustomerPan
                                            firstname={"Amy"}
                                            lastname={"Eben"}
                                            email={"ebenamy@gmail.com"}
                                            purchases={5}
                                            offers={5}
                                        />
                                        <AdminCustomerPan
                                            firstname={"Amy"}
                                            lastname={"Eben"}
                                            email={"ebenamy@gmail.com"}
                                            purchases={5}
                                            offers={5}
                                        />
                                        <AdminCustomerPan
                                            firstname={"Amy"}
                                            lastname={"Eben"}
                                            email={"ebenamy@gmail.com"}
                                            purchases={5}
                                            offers={5}
                                        />
                                        <AdminCustomerPan
                                            firstname={"Amy"}
                                            lastname={"Eben"}
                                            email={"ebenamy@gmail.com"}
                                            purchases={5}
                                            offers={5}
                                        />
                                        <AdminCustomerPan
                                            firstname={"Amy"}
                                            lastname={"Eben"}
                                            email={"ebenamy@gmail.com"}
                                            purchases={5}
                                            offers={5}
                                        />
                                        <AdminCustomerPan
                                            firstname={"Amy"}
                                            lastname={"Eben"}
                                            email={"ebenamy@gmail.com"}
                                            purchases={5}
                                            offers={5}
                                        />
                                        <AdminCustomerPan
                                            firstname={"Amy"}
                                            lastname={"Eben"}
                                            email={"ebenamy@gmail.com"}
                                            purchases={5}
                                            offers={5}
                                        />
                                        <AdminCustomerPan
                                            firstname={"Amy"}
                                            lastname={"Eben"}
                                            email={"ebenamy@gmail.com"}
                                            purchases={5}
                                            offers={5}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={"divAdminSellers" + (activeDiv === "divAdminSellers" ? " active" : "")}>
                                <button>ADD</button>
                                <div className={"adminSellerPanCard"}>
                                    <div className={"adminSellerPanCardScroll"}>
                                        <AdminSellersPan
                                            firstname={"Amy"}
                                            lastname={"Eben"}
                                            email={"ebenamy@gmail.com"}
                                            articles={83}
                                        />
                                        <AdminSellersPan
                                            firstname={"Amy"}
                                            lastname={"Eben"}
                                            email={"ebenamy@gmail.com"}
                                            articles={83}
                                        />
                                        <AdminSellersPan
                                            firstname={"Amy"}
                                            lastname={"Eben"}
                                            email={"ebenamy@gmail.com"}
                                            articles={83}
                                        />
                                        <AdminSellersPan
                                            firstname={"Amy"}
                                            lastname={"Eben"}
                                            email={"ebenamy@gmail.com"}
                                            articles={83}
                                        />
                                        <AdminSellersPan
                                            firstname={"Amy"}
                                            lastname={"Eben"}
                                            email={"ebenamy@gmail.com"}
                                            articles={83}
                                        />
                                        <AdminSellersPan
                                            firstname={"Amy"}
                                            lastname={"Eben"}
                                            email={"ebenamy@gmail.com"}
                                            articles={83}
                                        />
                                        <AdminSellersPan
                                            firstname={"Amy"}
                                            lastname={"Eben"}
                                            email={"ebenamy@gmail.com"}
                                            articles={83}
                                        />
                                        <AdminSellersPan
                                            firstname={"Amy"}
                                            lastname={"Eben"}
                                            email={"ebenamy@gmail.com"}
                                            articles={83}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={"divAdminProducts" + (activeDiv === "divAdminProducts" ? " active" : "")}>
                                <button>ADD</button>
                                <div className={"adminProductsPanCard"}>
                                    <div className={"adminProductsPanCardScroll"}>
                                        <AdminProductsPan
                                            srcImage={"/../public/img/imgClothing/imgPants/pants.png"}
                                            id={1}
                                            nameProduct={"Product 1"}
                                            creationDate={"12/12/2002"}
                                        />
                                        <AdminProductsPan
                                            srcImage={"/../public/img/imgClothing/imgPants/pants.png"}
                                            id={1}
                                            nameProduct={"Product 1"}
                                            creationDate={"12/12/2002"}
                                        />
                                        <AdminProductsPan
                                            srcImage={"/../public/img/imgClothing/imgPants/pants.png"}
                                            id={1}
                                            nameProduct={"Product 1"}
                                            creationDate={"12/12/2002"}
                                        />
                                        <AdminProductsPan
                                            srcImage={"/../public/img/imgClothing/imgPants/pants.png"}
                                            id={1}
                                            nameProduct={"Product 1"}
                                            creationDate={"12/12/2002"}
                                        />
                                        <AdminProductsPan
                                            srcImage={"/../public/img/imgClothing/imgPants/pants.png"}
                                            id={1}
                                            nameProduct={"Product 1"}
                                            creationDate={"12/12/2002"}
                                        />
                                        <AdminProductsPan
                                            srcImage={"/../public/img/imgClothing/imgPants/pants.png"}
                                            id={1}
                                            nameProduct={"Product 1"}
                                            creationDate={"12/12/2002"}
                                        />
                                        <AdminProductsPan
                                            srcImage={"/../public/img/imgClothing/imgPants/pants.png"}
                                            id={1}
                                            nameProduct={"Product 1"}
                                            creationDate={"12/12/2002"}
                                        />
                                        <AdminProductsPan
                                            srcImage={"/../public/img/imgClothing/imgPants/pants.png"}
                                            id={1}
                                            nameProduct={"Product 1"}
                                            creationDate={"12/12/2002"}
                                        />
                                        <AdminProductsPan
                                            srcImage={"/../public/img/imgClothing/imgPants/pants.png"}
                                            id={1}
                                            nameProduct={"Product 1"}
                                            creationDate={"12/12/2002"}
                                        />
                                        <AdminProductsPan
                                            srcImage={"/../public/img/imgClothing/imgPants/pants.png"}
                                            id={1}
                                            nameProduct={"Product 1"}
                                            creationDate={"12/12/2002"}
                                        />
                                        <AdminProductsPan
                                            srcImage={"/../public/img/imgClothing/imgPants/pants.png"}
                                            id={1}
                                            nameProduct={"Product 1"}
                                            creationDate={"12/12/2002"}
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="buttonContainer">
                            <button onClick={() => handleClick("divAdminCustomer")} className={activeDiv === "divAdminCustomer" ? "active" : ""}>CUSTOMER</button>
                            <button onClick={() => handleClick("divAdminSellers")} className={activeDiv === "divAdminSellers" ? "active" : ""}>SELLERS</button>
                            <button onClick={() => handleClick("divAdminProducts")} className={activeDiv === "divAdminProducts" ? "active" : ""}>PRODUCTS</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
