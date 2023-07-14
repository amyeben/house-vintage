import React, { useEffect, useState } from "react";
import NavbarAdmin from "../../../components/NavBarAdmin";
import Layout from "../../../components/Layout";
import Image from "next/image";
import AdminCustomerPan from "../../../components/AdminCustomerPan";
import AdminSellersPan from "../../../components/AdminSellersPan";
import AdminProductsPan from "../../../components/AdminProductsPan";
import AddItemForm from "../../../components/AddItemForm";
import AddCustomerForm from "../../../components/AddCustomerForm";
import AddSellersForm from "../../../components/AddSellersForm";
import axios from "axios";
import { useRouter } from "next/dist/client/compat/router";

export default function Admin() {
    const [activeDiv, setActiveDiv] = useState("divAdminCustomer");
    const [users, setUsers] = useState([]);
    const [sellers, setSellers] = useState([]);
    const [items, setItems] = useState([]);
    const [showAddItemForm, setShowAddItemForm] = useState(false);
    const [showAddCustomerForm, setShowAddCustomerForm] = useState(false);
    const [showAddSellerForm, setShowAddSellerForm] = useState(false);
    const [userId, setUserId] = useState(null);

    const router = useRouter();

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
            setUsers((prevUsers) => prevUsers.filter((user) => user.id !== customerId));
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
        const expirationTime = sessionStorage.getItem("expiration_time");
        const userType = sessionStorage.getItem("user_type");

        if (!userType || (expirationTime && Date.now() > parseInt(expirationTime))) {
            // La session a expiré ou l'utilisateur n'est pas connecté, rediriger vers la page de connexion
            router.push("/login");
        } else {
            switch (userType) {
                case "customer":
                    // Rediriger l'utilisateur customer vers sa propre page
                    router.push("/posts/customer");
                    break;
                case "seller":
                    // Rediriger l'utilisateur seller vers sa propre page
                    router.push("/posts/sellers/products");
                    break;
                case "admin":
                    // Rediriger l'utilisateur admin vers sa propre page
                    router.push("/posts/admin");
                    break;
                default:
                    // Rediriger vers une page d'erreur ou de connexion
                    router.push("/error");
                    break;
            }
        }

        /*
        Function who fetch EVERYTHING first when the page is loaded
         */
        async function fetchData() {
            try {
                const responseCustomer = await axios.get("http://localhost:8888/get_customers.php");
                const responseSeller = await axios.get("http://localhost:8888/get_sellers.php");
                const responseItems = await axios.get("http://localhost:8888/get_items.php");

                console.log(responseCustomer.data);
                console.log(responseSeller.data);
                console.log(responseItems.data);

                const usersData = responseCustomer.data;

                for (let i = 0; i < usersData.length; i++) {
                    const userId = usersData[i].id;
                    const { purchases, offers } = await handleFetchUserDetails(userId);
                    usersData[i].purchases = purchases;
                    usersData[i].offers = offers;
                }

                console.log(usersData);

                setUsers(usersData);

                const sellersData = responseSeller.data;

                for (let i = 0; i < sellersData.length; i++) {
                    const sellerId = sellersData[i].id;
                    const { articles } = await handleFetchSellerDetails(sellerId);
                    sellersData[i].articles = articles;
                }

                console.log(sellersData);

                setSellers(sellersData);

                const itemsData = responseItems.data;

                for (let i = 0; i < itemsData.length; i++) {
                    const itemId = itemsData[i].id;
                    const { price } = await handleFetchItemDetails(itemId);
                    itemsData[i].price = price;
                }

                console.log(itemsData);

                setItems(itemsData);
            } catch (error) {
                console.error("An error occurred while fetching the users:", error);
            }
        }


        fetchData();

        const userId = sessionStorage.getItem("user_id");
        console.log("userId = " + userId);
        setUserId(userId);
    }, []);

    /*
    Function who fetch customer details from database
     */
    const handleFetchUserDetails = async (userId) => {
        try {
            const response = await axios.post("http://localhost:8888/get_customer_details.php", { userId });
            const userData = response.data;

            const purchases = parseInt(userData.purchases);
            const offers = parseInt(userData.offers);

            return { purchases, offers };
        } catch (error) {
            console.error("An error occurred while fetching user details:", error);
            return { purchases: 0, offers: 0 };
        }
    };

    /*
    Function who fetch sellers details from database
     */
    const handleFetchSellerDetails = async (sellerId) => {
        try {
            const response = await axios.post("http://localhost:8888/get_seller_details.php", { userId: sellerId });
            const sellerData = response.data;

            const articles = parseInt(sellerData.articles);

            return { articles };
        } catch (error) {
            console.error("An error occurred while fetching seller details:", error);
            return { articles: 0 };
        }
    };

    /*
    Function who Add Item in database and set de frontend
     */
    const handleAddItem = async (newItem) => {
        try {
            // Make the API call to add the item
            await axios.post("http://localhost:8888/add_items.php", newItem);
            // Update the items list by fetching the updated data
            const responseItems = await axios.get("http://localhost:8888/get_items.php");
            setItems(responseItems.data);
            // Hide the AddItemForm
            setShowAddItemForm(false);
        } catch (error) {
            console.error("An error occurred while adding the item:", error);
        }
    };

    /*
    Function who Add Customer in database and set de frontend
     */
    const handleAddCustomer = async (newCustomer) => {
        const data = { ...newCustomer, user: "CUSTOMER" };
        console.log(data);

        if (!newCustomer.firstName || !newCustomer.lastName || !newCustomer.address || !newCustomer.username || !newCustomer.password) {
            console.log('Veuillez remplir tous les champs !!');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8888/suscribe.php', data);

            if (response.status !== 200) {
                throw new Error('Erreur lors de la requête.');
            }

            // Update the customers list by fetching the updated data
            const responseCustomers = await axios.get("http://localhost:8888/get_customers.php");

            const usersData = responseCustomers.data;

            for (let i = 0; i < usersData.length; i++) {
                const userId = usersData[i].id;
                const { purchases, offers } = await handleFetchUserDetails(userId);
                usersData[i].purchases = purchases;
                usersData[i].offers = offers;
            }

            console.log(usersData);
            setUsers(usersData);
            // Hide the AddCustomerForm
            setShowAddCustomerForm(false);
        } catch (error) {
            console.error("An error occurred while adding the customer:", error);
        }
    };

    /*
    Function who Add Seller in database and set de frontend
     */
    const handleAddSeller = async (newSeller) => {
        const data = { ...newSeller, user: "SELLER" };
        console.log(data);

        if (!newSeller.firstName || !newSeller.lastName || !newSeller.address || !newSeller.username || !newSeller.password) {
            console.log('Veuillez remplir tous les champs !!');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8888/suscribe.php', data);

            if (response.status !== 200) {
                throw new Error('Erreur lors de la requête.');
            }

            // Update the sellers list by fetching the updated data
            const responseSellers = await axios.get("http://localhost:8888/get_sellers.php");

            const sellersData = responseSellers.data;

            for (let i = 0; i < sellersData.length; i++) {
                const sellerId = sellersData[i].id;
                const { articles } = await handleFetchSellerDetails(sellerId);
                sellersData[i].articles = articles;
            }

            console.log(sellersData);
            setSellers(sellersData);
            // Hide the AddSellerForm
            setShowAddSellerForm(false);
        } catch (error) {
            console.error("An error occurred while adding the seller:", error);
        }
    };

    const handleFetchItemDetails = async (itemId) => {
        try {
            const response = await axios.get(`http://localhost:8888/get_items_details.php?id=${itemId}`);
            const itemData = response.data;


            const price = parseFloat(itemData.price_items);

            return { price };
        } catch (error) {
            console.error("An error occurred while fetching item details:", error);
            return { price: 0 };
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
                                <button onClick={() => setShowAddCustomerForm(true)}>ADD</button>
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
                                <button onClick={() => setShowAddSellerForm(true)}>ADD</button>
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
                                                price={item.price_items}
                                                onDelete={() => handleDeleteItem(item.id)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="buttonContainer">
                            <button
                                onClick={() => handleClick("divAdminCustomer")}
                                className={activeDiv === "divAdminCustomer" ? "active" : ""}
                            >
                                CUSTOMER
                            </button>
                            <button
                                onClick={() => handleClick("divAdminSellers")}
                                className={activeDiv === "divAdminSellers" ? "active" : ""}
                            >
                                SELLERS
                            </button>
                            <button
                                onClick={() => handleClick("divAdminProducts")}
                                className={activeDiv === "divAdminProducts" ? "active" : ""}
                            >
                                PRODUCTS
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {showAddItemForm && <AddItemForm onAddItem={handleAddItem} onClose={() => setShowAddItemForm(false)} />}
            {showAddCustomerForm && (
                <AddCustomerForm onAddCustomer={handleAddCustomer} onClose={() => setShowAddCustomerForm(false)} />
            )}
            {showAddSellerForm && (
                <AddSellersForm onAddSeller={handleAddSeller} onClose={() => setShowAddSellerForm(false)} />
            )}
        </>
    );
}
