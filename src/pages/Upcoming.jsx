import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const Upcoming = () => {
    const data = useLoaderData();
    const [notifiedProducts, setNotifiedProducts] = useState([]);

    const handleNotifyClick = (productId) => {
        toast.success("We will notify you when the product is released");
        setNotifiedProducts((prev) => [...prev, productId]);
    };
    return (
        <div className="mb-10">
            <Helmet>
                <title>Upcoming | Gadget Heaven</title>
            </Helmet>
            <div className="mt-5">
                <div className="max-w-7xl mx-auto text-center bg-[#9538E2] py-10 space-y-3">
                    <h2 className="text-3xl font-bold text-white">Upcoming products</h2>
                    <p className="text-white w-2/3 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold my-6">Our Upcoming Products</h2>
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {data.map((product) => (
                        <div key={product.id} className="bg-white shadow-md rounded-lg p-4 space-y-3">
                            <div><img src={product.imageUrl} alt={product.name} className="w-full h-60 rounded-lg mb-4" /></div>
                            <div className="flex flex-col space-y-3">
                                <h3 className="text-2xl font-semibold">{product.name}</h3>
                                <p className="text-lg text-[#09080F99]">{product.description}</p>
                                <p className="text-xl font-semibold]">Release Date: {product.releaseDate}</p>
                                <button onClick={() => handleNotifyClick(product.id)}
                                    disabled={notifiedProducts.includes(product.id)} 
                                    className="mt-4 bg-[#9538E2] text-white px-4 py-2 rounded-full hover:bg-blue-600 disabled:opacity-50">
                                    {notifiedProducts.includes(product.id) ? "Notified" : "Notify Me"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Upcoming;