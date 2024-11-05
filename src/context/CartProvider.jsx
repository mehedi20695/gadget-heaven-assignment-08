/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        // Retrieve cart from LocalStorage
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [wishlist, setWishlist] = useState(() => {
        // Retrieve wishlist from LocalStorage
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
        // Check if product is already in the cart
        if (!cart.some(item => item.product_id === product.product_id)) {
            setCart([...cart, product]);
        }
    };

    const addToWishlist = (product) => {
        // Check if product is already in the wishlist
        if (!wishlist.some(item => item.product_id === product.product_id)) {
            setWishlist([...wishlist, product]);
        }
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
                updateCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;