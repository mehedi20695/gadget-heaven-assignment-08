/* eslint-disable react/prop-types */


const Sidebar = ({ selectCategory }) => {
    const categories = ['all products', 'laptops', 'phones', 'smart watches', 'accessories', 'power banks', 'tv', 'fridge'];
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    return (
        <div className="text-center flex flex-col gap-3">
            {
                categories.map((cat => (<button className="btn text-[#9538E2] border-[#9538E2]" key={cat} onClick={() => selectCategory(cat)}>{capitalizeFirstLetter(cat)}</button>)))
            }
        </div>
    );
};

export default Sidebar;