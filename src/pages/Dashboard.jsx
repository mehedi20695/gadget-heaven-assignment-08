import { useContext, useEffect, useState } from "react";
import { HiOutlineSortDescending } from "react-icons/hi";
import { MdDisabledByDefault } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ModalImg from "../assets/group.png"
import { CartContext } from "../context/CartProvider";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const Dashboard = () => {
    // const [cartItems, setCartItems] = useState([]);
    // const [wishlistItems, setWishlistItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [activeTab, setActiveTab] = useState("cart");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navigate = useNavigate();

    const { cart, wishlist, addToCart, removeFromCart, removeFromWishlist, updateCart } = useContext(CartContext);

    useEffect(() => {
        calculateTotal(cart);
    }, [cart]);

    const calculateTotal = (items) => {
        const total = items.reduce((sum, item) => sum + item.price, 0);
        setTotalPrice(total);
    };

    const sortCartByPrice = () => {
        const sortedItems = [...cart].sort((a, b) => b.price - a.price);
        updateCart(sortedItems);
    };

    const handlePurchase = () => {
        setIsModalOpen(true);
    };

    const closeModalAndRedirect = () => {
        if (cart.length === 0) return;
        updateCart([]);
        setTotalPrice(0);
        localStorage.removeItem("cart");
        navigate("/");
        setIsModalOpen(false);
    };

    const addToCartFromWishlist = (item) => {
        addToCart(item);
        toast.success("Product added to cart!")
        removeFromWishlist(item.product_id);
        
    };

    return (
        <div className="mt-5">
            <Helmet>
                <title>Dashboard | Gadget Heaven</title>
            </Helmet>
            <div className="max-w-7xl mx-auto text-center bg-[#9538E2] py-10">
                <h2 className="text-3xl font-bold text-white">Dashboard</h2>
                <p className="text-white w-2/3 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="tabs gap-10 mt-5 max-w-lg mx-auto">

                    <button className={`tab btn rounded-full ${activeTab === 'cart' ? 'tab-active' : 'bg-[#9538E2] text-white'}`} onClick={() => setActiveTab("cart")}>Cart</button>

                    <button className={`tab btn rounded-full ${activeTab === 'wishlist' ? 'tab-active' : 'bg-[#9538E2] text-white'}`} onClick={() => setActiveTab("wishlist")}>Wishlist</button>
                </div>
            </div>
            <div className="max-w-6xl mx-auto">
                {activeTab === "cart" && (
                    <div className="cart-tab">
                        <div className="md:flex md:justify-between my-10">
                            <h3 className="text-2xl font-bold">Cart</h3>
                            <div className="space-x-5">
                                <span className="text-2xl font-bold">Total Price: ${totalPrice}</span>
                                <button className="border border-[#9538E2] btn rounded-full text-[#9538E2] bg-white"
                                    onClick={sortCartByPrice}>
                                    Sort by Price <HiOutlineSortDescending /></button>

                                <button className="btn rounded-full bg-[#9538E2] text-white"
                                    onClick={handlePurchase} disabled={totalPrice === 0}>Purchase</button>
                            </div>
                        </div>
                        {cart.length > 0 ? (cart.map((item, index) => (
                            <div key={index} className="grid grid-cols-1 md:grid-cols-8 p-4 border rounded-xl items-center gap-5 my-5">
                                <div className="col-span-2">
                                    <img className="object-cover rounded-xl" src={item.product_image} alt="" />
                                </div>
                                <div className="space-y-5 col-span-5">
                                    <h3 className="text-2xl font-semibold">{item.product_title}</h3>
                                    <h4 className="text-lg text-[#09080F99]">{item.description}</h4>
                                    <h4 className="text-xl font-semibold">Price: ${item.price}</h4>
                                </div>
                                <div onClick={() => removeFromCart(item.product_id)}
                                className="text-red-600 text-2xl col-span-1">
                                    <MdDisabledByDefault />
                                </div>
                            </div>
                        ))) : (<h2 className="text-3xl font-bold text-[#9538E2] text-center my-5">No data in Cart</h2>)}
                    </div>

                )}

                {activeTab === "wishlist" && (
                    wishlist.length > 0 ? (
                        <div className="wishlist-tab my-10">
                            <h3 className="text-2xl font-bold mb-10">Wishlist</h3>
                            {wishlist.map((item, index) => (
                                <div key={index} className="grid grid-cols-1 md:grid-cols-8 p-4 border rounded-xl items-center gap-5 my-5">
                                    <div className="col-span-2">
                                        <img className="object-cover rounded-xl" src={item.product_image} alt="" />
                                    </div>
                                    <div className="space-y-5 col-span-5">
                                        <h3 className="text-2xl font-semibold">{item.product_title}</h3>
                                        <h4 className="text-lg text-[#09080F99]">{item.description}</h4>
                                        <h4 className="text-xl font-semibold">Price: ${item.price}</h4>
                                        <button onClick={() => addToCartFromWishlist(item)}
                                        className="btn bg-[#9538E2] rounded-full text-white">Add To Cart</button>
                                    </div>
                                    <div onClick={() => removeFromWishlist(item.product_id)} className="text-red-600 text-2xl col-span-1">
                                        <MdDisabledByDefault />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : <h2 className="text-3xl font-bold text-[#9538E2] text-center my-5">No data in Wishlist</h2>
                )}
            </div>
            
            {/* Modal */}
            {isModalOpen && (
                <div className="modal modal-open">
                    <div className="modal-box text-center">
                        <div className="flex items-center justify-center">
                            <img src={ModalImg} alt="" />
                        </div>
                        <h2 className="text-2xl font-bold mt-5 mb-5">Payment Successfully</h2>
                        <hr />
                        <p className="text-[#09080F99] font-medium mt-5">Thanks for Purchasing.</p>
                        <p className="text-[#09080F99] font-medium mt-3">Total: ${totalPrice}</p>
                        <div className="modal-action flex justify-center items-center">
                            <button className="btn rounded-full bg-[#9538E2] text-white hover:text-black" 
                            onClick={closeModalAndRedirect}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;