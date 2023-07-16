import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Layout from '../../../../components/Layout';
import NavbarUser from '../../../../components/NavBarUser';
import Image from 'next/image';
import ProductPresentation from '../../../../components/ProductPresentation';
import FooterUser from '../../../../components/FooterUser';
import BuyAlert from '../../../../components/BuyAlert';
import Cart from '../../../../components/Cart';


const StoreCustomer = () => {
    const router = useRouter();
    const [products, setProducts] = useState({
        auctions: [],
        clothing: [],
        accessories: [],
        footwear: [],
        electronics: [],
        books: [],
    });

    const [showAlert, setShowAlert] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedTitle, setSelectedTitle] = useState(null);
    const [selectedDescription, setSelectedDescription] = useState(null);
    const [selectedSrcImage, setSelectedSrcImage] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [quantity, setQuantity] = useState(1);


    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (item, title, category, description, src_image, price) => {
        const userId = sessionStorage.getItem("user_id");
        //const uniqueItemId = `${item.id}_${userId}`;

        console.log(item);
        console.log(src_image);
        console.log(quantity);

        const newCartItem = {
            item: item,
            name: title,
            category: category,
            description: description,
            src_image: src_image,
            price: price,
            quantity: quantity,
            totalPrice: quantity * parseFloat(price),

        };

        console.log(newCartItem);

        // Utilisez tous les paramètres pour ajouter l'objet au panier
        setCartItems([...cartItems, newCartItem]);

        setShowAlert(false);
        setShowCart(true);
    };

    useEffect(() => {
        const expirationTime = sessionStorage.getItem('expiration_time');
        const userType = sessionStorage.getItem('user_type');

        if (!userType || (expirationTime && Date.now() > parseInt(expirationTime))) {
            router.push('/login');
        } else {
            switch (userType) {
                case 'customer':
                    router.push('/posts/customer/store');
                    break;
                case 'seller':
                    router.push('/posts/sellers');
                    break;
                case 'admin':
                    router.push('/posts/admin');
                    break;
                default:
                    router.push('/error');
                    break;
            }
        }

        axios
            .get('http://localhost:8888/get_store_items.php')
            .then((response) => {
                const sortedProducts = response.data;
                setProducts(sortedProducts);
            })
            .catch((error) => console.log(error));
    }, []);

    const handleShowAlert = (itemId, title, category, description, src_image, price) => {
        setSelectedItemId(itemId);
        setSelectedCategory(category);
        setSelectedDescription(description);
        setSelectedTitle(title);
        setSelectedSrcImage(src_image);
        setSelectedPrice(price);
        setShowAlert(true);
    };

    const handleClearCart = () => {
        setCartItems([]);
    };

    return (
        <>
            <div className={'main-content'}>
                <Layout />
                <NavbarUser />
                <span className={'homeTitle'}>STORE</span>
                <span className={'homeDescription'}>
          Step into the past with our exquisite vintage collection! Discover
          timeless fashion and unique treasures at our vintage store.
        </span>
                <div className={'arrows'}>
                    <Image src="/../public/img/arrow1.png" height={265.5} width={181.31} alt={'arrow1'} />
                    <Image src="/../public/img/arrow2.png" height={265.5} width={181.31} alt={'arrow2'} />
                </div>
                <div className="fieldsetContainer">
                    <fieldset>
                        <legend id={'auctions'}>#AUCTIONS</legend>
                        <p>FROM XX/XX/XXXX TO XX/XX/XXXX</p>
                        <div className={'storeAuctionsCard'}></div>
                        <p className={'alertMsg'}>NO AUCTIONS FOR NOW !!</p>
                    </fieldset>
                </div>

                <div className="fieldsetContainer">
                    <fieldset>
                        <legend id="clothing">#CLOTHING</legend>
                        <div className="storeClothingCard">
                            {products.clothing.map((product) => (
                                <ProductPresentation
                                    key={product.id}
                                    srcImage={product.src_image}
                                    id={product.id}
                                    articleName={product.name}
                                    articlePrice={product.price_items}
                                    div={() => handleShowAlert(product.id)}
                                />
                            ))}
                        </div>
                    </fieldset>
                </div>

                <div className="fieldsetContainer">
                    <fieldset>
                        <legend id="accessories">#ACCESSORIES</legend>
                        <div className="storeAccessoriesCard">
                            {products.accessories.map((product) => (
                                <ProductPresentation
                                    key={product.id}
                                    srcImage={product.src_image}
                                    id={product.id}
                                    articleName={product.name}
                                    articlePrice={product.price_items}
                                    div={() => handleShowAlert(product.id)}
                                />
                            ))}
                        </div>
                    </fieldset>
                </div>

                <div className="fieldsetContainer">
                    <fieldset>
                        <legend id="footwear">#FOOTWEAR</legend>
                        <div className="storeFootwearCard">
                            {products.footwear.map((product) => (
                                <ProductPresentation
                                    key={product.id}
                                    srcImage={product.src_image}
                                    id={product.id}
                                    articleName={product.name}
                                    articlePrice={product.price_items}
                                    div={() => handleShowAlert(product.id)}
                                />
                            ))}
                        </div>
                    </fieldset>
                </div>

                <div className="fieldsetContainer">
                    <fieldset>
                        <legend id="books">#BOOKS AND MAGAZINES</legend>
                        <div className="storeBooksCard">
                            {products.books.map((product) => (
                                <ProductPresentation
                                    key={product.id}
                                    srcImage={product.src_image}
                                    id={product.id}
                                    articleName={product.name}
                                    articlePrice={product.price_items}
                                    div={() => handleShowAlert(product.id)}
                                />
                            ))}
                        </div>
                    </fieldset>
                </div>

                <div className="fieldsetContainer">
                    <fieldset>
                        <legend id="electronics">#ELECTRONICS</legend>
                        <div className="storeElectronicsCard">
                            {products.electronics.map((product) => (
                                <ProductPresentation
                                    key={product.id}
                                    srcImage={product.src_image}
                                    id={product.id}
                                    articleName={product.name}
                                    articlePrice={product.price_items}
                                    div={() => handleShowAlert(product.id, product.name, product.categorie, product.description, product.src_image, product.price_items)}
                                />
                            ))}
                        </div>
                    </fieldset>
                </div>
                {showAlert && (
                    <BuyAlert
                        itemId={selectedItemId}
                        onClose={() => setShowAlert(false)}
                        onAddtoCart={() => handleAddToCart(selectedItemId, selectedTitle, selectedCategory, selectedDescription, selectedSrcImage, selectedPrice)}
                        quantity={quantity}
                        setQuantity={setQuantity}
                    />
                )}
            </div>
            <FooterUser />
            {showCart && <Cart cartItems={cartItems} o onClose={() => setShowCart(false)} onClearCart={handleClearCart}/>}
        </>
    );
};

export default StoreCustomer;
