import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import StarRatings from "react-star-ratings";
import { CartContext } from "../context/CartProvider";
import { toast } from 'react-toastify';

const CardDetails = () => {
    const { product_id } = useParams();
    const data = useLoaderData();
    // const { addToCart, addToWishlist, wishlist } = useContext(CartContext);
    const context = useContext(CartContext);
    console.log(context);
    if (!context) {
        throw new Error("CardDetails must be used within a CartProvider");
    }
    const { addToCart, addToWishlist, wishlist } = context;
    const [gadget, setGadget] = useState({});
    const [wishlistDisabled, setWishlistDisabled] = useState(false);
    useEffect(() => {
        const singleData = data.find((gadget) => gadget.product_id === parseInt(product_id))
        setGadget(singleData)
    }, [data, product_id]);
    
    useEffect(() => {
        setWishlistDisabled(wishlist.some(item => item.product_id === parseInt(product_id)));
    }, [wishlist, product_id]);

    const handleAddToCart = () => {
        addToCart(gadget);
        toast.success('Item added to cart!');
    };
    const handleAddToWishlist = () => {
        if (!wishlistDisabled) {
            addToWishlist(gadget);
            setWishlistDisabled(true);
            toast.info('Item added to wishlist!');
        }
    };

    const { product_title, product_image, price, description, specification, availability, rating, brand } = gadget;
    return (
        <div className="max-w-7xl mx-auto mt-5">
            <div className="text-center bg-[#9538E2] pt-5 pb-52">
                <h2 className="text-3xl font-bold text-white">Product Details</h2>
                <p className="text-white w-2/3 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            {/* card */}
            <div className="hero rounded-xl border p-3 max-w-4xl mx-auto bg-gray-100 -mt-40 mb-10">
                <div className="hero-content flex-col lg:flex-row gap-6 bg-white rounded-xl">
                    <div>
                        <img
                            src={product_image}
                            className="max-w-sm rounded-lg h-full" />
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-2xl font-semibold">{product_title}</h1>
                        <h2 className="text-xl font-semibold">Price: ${price}</h2>
                        <div>
                            <button className="border border-[#4af20d] rounded-full p-2 w-24 text-[#4af20d]">{availability ? 'In stock' : 'Out Of Stock'}</button>
                        </div>
                        <h3 className="text-lg text-[#09080F99]">{description}</h3>
                        <div>
                            <h4 className="text-lg font-bold">Specification:</h4>
                            <ol>{specification && specification.map((item, i) => (
                                <li key={i} className="text-[#09080F99] text-lg">{i + 1}. {item}</li>
                            ))}</ol>

                        </div>
                        <h4 className="text-lg font-bold">Rating:</h4>
                        <div className="flex items-center gap-5">
                            <StarRatings
                                rating={rating}
                                starRatedColor="#ffd700"
                                numberOfStars={5}
                                name="rating"
                                starDimension="24px"
                                starSpacing="2px"
                            />
                            <p className="rounded-full border p-1 bg-base-200">{rating}</p>
                        </div>
                        <h3 className="text-lg text-[#09080F99]">Brand: {brand}</h3>

                        <button onClick={handleAddToCart}
                            className="btn bg-[#9538E2] rounded-full text-white">Add To Cart <BsCart3></BsCart3></button>

                        <button onClick={handleAddToWishlist}
                            disabled={wishlistDisabled} className="btn bg-white rounded-full ml-5">
                            <FaRegHeart></FaRegHeart>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;