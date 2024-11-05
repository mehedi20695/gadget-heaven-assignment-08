
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GadgetCard = ({ products, category }) => {

    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        // If the category is "initial", display only the first 6 products
        if (category === 'initial') {
            setFilteredProducts(products.slice(0, 6));
        } else if (category === 'all products') {
            // Display all products when "All" is selected
            setFilteredProducts(products);
        } else {
            // Filter products by the selected category
            const filtered = products.filter((product) => product.category === category);
            setFilteredProducts(filtered);
        }
    }, [category, products]);
    return (
        <div className="grid md:grid-cols-3 gap-5">

            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <div className="border rounded-xl p-3 space-y-3 flex flex-col justify-between"
                        key={product.product_id} product={product}>
                        <div><img className="rounded-lg w-full h-44" src={product.product_image} alt="" /></div>
                        <h3 className="font-semibold text-2xl">{product.product_title}</h3>
                        <h5 className="text-[#09080F99] text-xl font-medium">$ {product.price}</h5>
                        <div>
                            <Link to={`/details/${product.product_id}`}>
                                <button className="btn rounded-full bg-white border border-[#9538E2] text-[#9538E2] mt-2">Videw details</button></Link>
                        </div>
                    </div>
                ))
            ) : (
                <h2 className="text-3xl font-bold text-[#9538E2] text-center mt-5">No data found</h2>
            )}
        </div>
    );
};

export default GadgetCard;