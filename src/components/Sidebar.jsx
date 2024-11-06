/* eslint-disable react/prop-types */

import { useState } from "react";


const Sidebar = ({ selectCategory }) => {

    const categories = ['all products', 'laptops', 'phones', 'smart watches', 'accessories', 'power banks', 'tv', 'fridge'];

    const [activeCategory, setActiveCategory] = useState('laptops');

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        selectCategory(category);
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div className="text-center flex flex-col gap-3">
            {
                categories.map((cat => (<button className={`btn text-[#9538E2] border-[#9538E2] ${activeCategory === cat ? "bg-[#9538E2] text-white" : ""
                    }`} key={cat} onClick={() => handleCategoryClick(cat)}>{capitalizeFirstLetter(cat)}</button>)))
            }
        </div>
    );
};

export default Sidebar;