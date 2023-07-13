import Layout from "../../../../components/Layout";
import NavbarSellers from "../../../../components/NavBarSellers";
import Image from "next/image";
import SellerProductAD from "../../../../components/SellerProductAD";
import FooterSellers from "../../../../components/FooterSellers";
import {useRouter} from "next/dist/client/compat/router";
import {useEffect, useState} from "react";
import axios from "axios";
import AddItemForm from "../../../../components/AddItemForm";

export default function Sellers() {

    const router = useRouter();
    const [items, setItems] = useState([]);
    const [showAddItemForm, setShowAddItemForm] = useState(false);


    const handleDeleteItem = async (itemId) => {
        try {
            await axios.delete(`http://localhost:8888/delete_items.php?id=${itemId}`);
            setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
        } catch (error) {
            console.error("An error occurred while deleting the item:", error);
        }
    };


    useEffect(() => {
        const expirationTime = sessionStorage.getItem('expiration_time');
        const userType = sessionStorage.getItem('user_type');

        if (!userType || (expirationTime && Date.now() > parseInt(expirationTime))) {
            // La session a expiré ou l'utilisateur n'est pas connecté, rediriger vers la page de connexion
            router.push('/login');
        } else {
            switch (userType) {
                case 'customer':
                    // Rediriger l'utilisateur customer vers sa propre page
                    router.push('/posts/customer');
                    break;
                case 'seller':
                    // Rediriger l'utilisateur seller vers sa propre page
                    router.push('/posts/sellers/products');
                    break;
                case 'admin':
                    // Rediriger l'utilisateur admin vers sa propre page
                    router.push('/posts/admin');
                    break;
                default:
                    // Rediriger vers une page d'erreur ou de connexion
                    router.push('/error');
                    break;
            }
        }

        async function fetchData() {
            try {
                const userId = sessionStorage.getItem('user_id');
                const responseItems = await axios.post("http://localhost:8888/get_items.php", userId);

                if (responseItems.status !== 200) {
                    throw new Error('Erreur lors de la requête.');
                }

                console.log(responseItems.data);
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
            console.log("yesssss");
        } catch (error) {
            console.error("An error occurred while adding the item:", error);
        }
    };



    return (<>

        <div className={"main-content"}>
            <Layout />
            <NavbarSellers />
            <span className={"homeTitle"}>MY PRODUCTS</span>
            <span className={"homeDescription"}>Unlock the potential of your vintage treasures! Join our seller community and showcase your unique collection to vintage enthusiasts around the world.</span>
            <div className={"arrows"}>
                <Image src="/../public/img/arrow1.png" height={265.5} width={181.31} alt={"arrow1"}/>
                <Image src="/../public/img/arrow2.png" height={265.5} width={181.31} alt={"arrow2"}/>
            </div>
            <div className={"productTextcontent"}>
                <span>MANAGE YOUR PRODUCTS</span>
                <p>You can add or delete some products below here !</p>
                <button onClick={() => setShowAddItemForm(true)}>ADD</button>
            </div>

            <div className={"productsSeller"}>
                {items.map((item) => (
                    <div className="card">
                        <SellerProductAD
                            srcImage={item.src_image}
                            productName={item.name}
                            productPrice={item.price_items}
                            productCategorie={item.categorie}
                            productDescription={item.description}
                            productAuction={item.auction_items}
                            onDelete={() => handleDeleteItem(item.id)}/>
                    </div>))}


            </div>


            {showAddItemForm && <AddItemForm onAddItem={handleAddItem} onClose={() => setShowAddItemForm(false)} />}



        </div>
        <FooterSellers />



    </>)

}