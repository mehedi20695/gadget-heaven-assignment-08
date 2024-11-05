import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Gadgets from "../components/Gadgets";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Gadget Heaven</title>
            </Helmet>
            <Banner></Banner>
            <Gadgets></Gadgets>
        </div>
    );
};

export default Home;