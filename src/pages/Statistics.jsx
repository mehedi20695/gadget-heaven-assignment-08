import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartProvider";
import { Area, Bar, CartesianGrid, ComposedChart, Legend, ResponsiveContainer, Scatter, Tooltip, XAxis, YAxis } from "recharts";

const Statistics = () => {
    const { cart } = useContext(CartContext); // Retrieve cart data from context or use your own data source
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        // Prepare data for chart: Only keep necessary fields like name, price, and rating
        const formattedData = cart.map(item => ({
            name: item.product_title,
            price: item.price,
            rating: item.rating || 3.5, // Default rating if not provided
        }));
        setChartData(formattedData);
    }, [cart]);
    return (
        <div className="mb-10">
            <div className="mt-5">
                <div className="max-w-7xl mx-auto text-center bg-[#9538E2] py-10">
                    <h2 className="text-3xl font-bold text-white">Statistics</h2>
                    <p className="text-white w-2/3 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>
            <div className="max-w-6xl mx-auto p-5">
                <h2 className="text-3xl font-bold text-center my-10">Statistics: Price vs. Product Name</h2>
                <ResponsiveContainer width="100%" height={450}>
                    <ComposedChart data={chartData} margin={{ top: 20, right: 30, bottom: 30, left: 20 }}>
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} height={80} />
                        <YAxis dataKey="price" />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="price" barSize={20} fill="#413ea0" />
                        <Scatter dataKey="rating" fill="#ff7300" />
                    </ComposedChart>
                </ResponsiveContainer>
                <p className="text-center text-gray-600 mt-10">
                    This chart displays the Price of each product and its Rating in a combined view.
                </p>
            </div>
        </div>
    );
};

export default Statistics;