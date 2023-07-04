import Layout from "../../../components/Layout";
import Navbar from "../../../components/NavBar";
import Footer from "../../../components/Footer";

export default function Admin() {

    return (<>
        <div className={"main-content"}>
            <Layout />
            <Navbar />
            <h1>ADMIN LOGGED IN</h1>
        </div>
        <Footer />


    </>)

}