import { useEffect, useState } from "react";
import NavbarAdmin from "../../../components/NavBarAdmin";
import Layout from "../../../components/Layout";
import Image from "next/image";
import AdminCustomerPan from "../../../components/AdminCustomerPan";
import AdminSellersPan from "../../../components/AdminSellersPan";
import AdminProductsPan from "../../../components/AdminProductsPan";
import { useRouter } from "next/router";
import axios from "axios";
import AddItemForm from "../../../components/AddItemForm"; // Import the AddItemForm component

export default function Admin() {
    const [activeDiv, setActiveDiv] = useState("divAdminCustomer");
    const [users, setUsers] = useState([]);
    const [sellers, setSellers] = useState([]);
    const [items, setItems] = useState([]);
    const [customer, setCustomer] = useState([]);
    const [showAddItemForm, setShowAddItemForm] = useState(false); // State to control the visibility of AddItemForm

    const handleClick = (divName) => {
        setActiveDiv(divName);
    };

    const handleDeleteItem = async (itemId) => {
        try {
            await axios.delete(`http://localhost:8888/delete_items.php?id=${itemId}`);
            setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
        } catch (error) {
            console.error("An error occurred while deleting the item:", error);
        }
    };

    const handleDeleteCustomer = async (customerId) => {
        try {
            await axios.delete(`http://localhost:8888/delete_customers.php?id=${customerId}`);
            setCustomer((prevCustomers) => prevCustomers.filter((customer) => customer.id !== customerId));
        } catch (error) {
            console.error("An error occurred while deleting the customer:", error);
        }
    };

    const handleDeleteSeller = async (sellerId) => {
        try {
            await axios.delete(`http://localhost:8888/delete_sellers.php?id=${sellerId}`);
            setSellers((prevSellers) => prevSellers.filter((seller) => seller.id !== sellerId));
        } catch (error) {
            console.error("An error occurred while deleting the seller:", error);
        }
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const responseCustomer = await axios.get("http://localhost:8888/get_customers.php");
                const responseSeller = await axios.get("http://localhost:8888/get_sellers.php");
                const responseItems = await axios.get("http://localhost:8888/get_items.php");

                console.log(responseCustomer.data);
                console.log(responseSeller.data);
                console.log(responseItems.data);

                setUsers(responseCustomer.data);
                setSellers(responseSeller.data);
                setItems(responseItems.data);
            } catch (error) {
                console.error("An error occurred while fetching the users:", error);
            }
        }

        fetchData();
    }, []);

    const handleAddItem = async (newItem) => {
        try {
            // Make the API call to add the item
            //await axios.post("http://localhost:8888/add_items.php", newItem);
            // Update the items list by fetching the updated data
            //const responseItems = await axios.get("http://localhost:8888/get_items.php");
            //setItems(responseItems.data);
            // Hide the AddItemForm
            //setShowAddItemForm(false);
            console.log("yesssss")
        } catch (error) {
            console.error("An error occurred while adding the item:", error);
        }
    };

    return (
        <>
            <div className="main-content admin-page">
                <Layout />
                <NavbarAdmin />
                <div className="adminPageDiv">
                    <div className="divAdminH">
                        <span>THE VINTAGE HOUSE</span>
                        <Image src="/img/bubble.png" height={138} width={138} alt="bubble" />
                        <p>ADMIN</p>
                    </div>
                    <div className="carouselDiv">
                        <div className="divUsers">
                            <div className={`divAdminCustomer${activeDiv === "divAdminCustomer" ? " active" : ""}`}>
                                <button>ADD</button>
                                <div className="admincustomerPanCard">
                                    <div className="admincustomerPanCardScroll">
                                        {users.map((user) => (
                                            <AdminCustomerPan
                                                key={user.id}
                                                firstname={user.firstname}
                                                lastname={user.lastname}
                                                email={user.email}
                                                purchases={user.purchases}
                                                offers={user.offers}
                                                onDelete={() => handleDeleteCustomer(user.id)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className={`divAdminSellers${activeDiv === "divAdminSellers" ? " active" : ""}`}>
                                <button>ADD</button>
                                <div className="adminSellerPanCard">
                                    <div className="adminSellerPanCardScroll">
                                        {sellers.map((seller) => (
                                            <AdminSellersPan
                                                key={seller.id}
                                                firstname={seller.firstname}
                                                lastname={seller.lastname}
                                                email={seller.email}
                                                articles={seller.articles}
                                                onDelete={() => handleDeleteSeller(seller.id)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className={`divAdminProducts${activeDiv === "divAdminProducts" ? " active" : ""}`}>
                                <button onClick={() => setShowAddItemForm(true)}>ADD</button>
                                <div className="adminProductsPanCard">
                                    <div className="adminProductsPanCardScroll">
                                        {items.map((item) => (
                                            <AdminProductsPan
                                                key={item.id}
                                                srcImage={item.src_image}
                                                id={item.id}
                                                nameProduct={item.name}
                                                creationDate={item.creation_date}
                                                onDelete={() => handleDeleteItem(item.id)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="buttonContainer">
                            <button onClick={() => handleClick("divAdminCustomer")} className={activeDiv === "divAdminCustomer" ? "active" : ""}>
                                CUSTOMER
                            </button>
                            <button onClick={() => handleClick("divAdminSellers")} className={activeDiv === "divAdminSellers" ? "active" : ""}>
                                SELLERS
                            </button>
                            <button onClick={() => handleClick("divAdminProducts")} className={activeDiv === "divAdminProducts" ? "active" : ""}>
                                PRODUCTS
                            </button>
                        </div>
                    </div>
                </div>

            {showAddItemForm && <AddItemForm classname={"addItemForm"} onAddItem={handleAddItem} onClose={() => setShowAddItemForm(false)} />}
            </div>
        </>
    );
}
