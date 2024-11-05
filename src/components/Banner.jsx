import { Link } from "react-router-dom";
import BannerImg from "../assets/banner.jpg"
const Banner = () => {
    return (
        <div className="mb-10">
            <div className="max-w-7xl mx-auto pt-36 pb-64 md:px-36 bg-[#9538E2] text-center space-y-3 rounded-b-xl">
                <h1 className="font-bold text-3xl md:text-5xl text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className="text-[#FFFFFF] pb-5">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div>
                    <Link to='/dashboard'><button className="rounded-full btn font-bold text-xl text-[#9538E2] bg-white">Shop Now</button></Link>
                </div>

            </div>
            <div className="lg:max-w-4xl md:max-w-2xl max-w-xs lg:h-[480px] md:h-[380px] h-[320px] mx-auto border p-4 rounded-2xl backdrop-blur-3xl -mt-56">
                <img className="rounded-2xl w-full h-full" src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;