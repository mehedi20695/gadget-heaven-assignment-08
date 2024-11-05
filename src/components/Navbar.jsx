import { NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

const Navbar = () => {
    const { cart, wishlist } = useContext(CartContext);
    return (
        <div className="mt-5">
            <div className="navbar max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <NavLink to='/' className={({ isActive }) =>
                                `font-bold ${isActive ? 'text-[#9538E2]' : 'hover:text-[#4ee358] text-[#0B0B0BB3] font-medium'}`
                            }>Home</NavLink>
                            <NavLink to='/statistics' className={({ isActive }) =>
                                `font-bold ${isActive ? 'text-[#9538E2]' : 'hover:text-[#4ee358] text-[#0B0B0BB3] font-medium'}`
                            }>Statistics</NavLink>
                            <NavLink to='/dashboard' className={({ isActive }) =>
                                `font-bold ${isActive ? 'text-[#9538E2]' : 'hover:text-[#4ee358] text-[#0B0B0BB3] font-medium'}`
                            }>Dashboard</NavLink>
                            <NavLink to='/upcoming' className={({ isActive }) =>
                                `font-bold ${isActive ? 'text-[#9538E2]' : 'hover:text-[#4ee358] text-[#0B0B0BB3] font-medium'}`
                            }>Upcoming</NavLink>
                        </ul>
                    </div>
                    <NavLink to='/' className={({ isActive }) =>
                        `font-bold text-xl ${isActive ? 'text-white' : 'hover:text-[#4ee358]'}`
                    }>Gadget Heaven</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-5">
                        <NavLink to='/' className={({ isActive }) =>
                            `font-bold ${isActive ? 'text-white' : 'hover:text-[#4ee358] text-[#0B0B0BB3] font-medium'}`
                        }>Home</NavLink>
                        <NavLink to='/statistics' className={({ isActive }) =>
                            `font-bold ${isActive ? 'text-[#9538E2]' : 'hover:text-[#4ee358] text-[#0B0B0BB3] font-medium'}`
                        }>Statistics</NavLink>
                        <NavLink to='/dashboard' className={({ isActive }) =>
                            `font-bold ${isActive ? 'text-[#9538E2]' : 'hover:text-[#4ee358] text-[#0B0B0BB3] font-medium'}`
                        }>Dashboard</NavLink>
                        <NavLink to='/upcoming' className={({ isActive }) =>
                            `font-bold ${isActive ? 'text-[#9538E2]' : 'hover:text-[#4ee358] text-[#0B0B0BB3] font-medium'}`
                        }>Upcoming</NavLink>
                    </ul>
                </div>
                <div className="navbar-end space-x-3">
                    <NavLink to="/dashboard">
                        <button className="px-4 py-1 border bg-white rounded-full">
                            <span className="badge badge-xs badge-error text-[8px] text-white p-1">{cart.length}</span>
                            <BsCart3></BsCart3>

                        </button>
                    </NavLink>

                    <NavLink to="/dashboard">
                        <button className="px-4 py-1 border bg-white rounded-full">
                            <span className="badge badge-xs badge-error text-[8px] text-white p-1">{wishlist.length}</span>
                            <FaRegHeart></FaRegHeart>

                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;