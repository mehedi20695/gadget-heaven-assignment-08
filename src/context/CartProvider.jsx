/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [wishlist, setWishlist] = useState(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const addToCart = (product) => {
        if (!cart.some(item => item.product_id === product.product_id)) {
            setCart([...cart, product]);
        }
    };

    const addToWishlist = (product) => {
        if (!wishlist.some(item => item.product_id === product.product_id)) {
            setWishlist([...wishlist, product]);
        }
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(item => item.product_id !== productId);
        setCart(updatedCart);
        toast.warning("Product removed from cart!");
    };

    const removeFromWishlist = (productId) => {
        const updatedWishlist = wishlist.filter(item => item.product_id !== productId);
        setWishlist(updatedWishlist);
        toast.warning("Product removed from wishlist!");
    };

    const updateCart = (items) => {
        setCart(items);
        localStorage.setItem("cart", JSON.stringify(items));
    };
    
    return (
        <CartContext.Provider
            value={{
                cart,
                wishlist,
                addToCart,
                addToWishlist,
                removeFromCart,
                removeFromWishlist,
                updateCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;