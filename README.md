# GadgetHeaven ✨
**Your go-to destination for the latest and greatest gadgets**

Welcome to GadgetHeaven! This project is a responsive e-commerce platform for gadget enthusiasts, allowing users to explore, filter, add to cart, and manage their wishlist seamlessly. Built with React, the platform leverages Context API and LocalStorage for smooth data handling and a persistent user experience. Check out the live version below and dive into the code to see the inner workings of this e-commerce project.

---

## 🚀 Live Website Link
[Visit GadgetHeaven](https://gadget-heaven-by-mehedi.netlify.app/)

## 📄 Requirement Document
[Download PDF Requirements](https://github.com/ProgrammingHero1/B10-A8-gadget-heaven/blob/main/Batch-10_Assignment-08.pdf)

---

## Project Overview

**GadgetHeaven** is designed to provide users with an intuitive and engaging shopping experience for gadgets. The website includes:
- Structured navigation with clear routing.
- A responsive layout following a detailed Figma design.
- Features like a shopping cart, wishlist, product filtering, and price sorting.
- Detailed gadget pages with product images, prices, and descriptions.

---

## Features
1. **Responsive Navbar** - Includes menu items like Logo, Brand Name, Dashboard, Stats with active route indication.
2. **Home Page** - Showcases an attractive banner, category sidebar, and gadget cards.
3. **Product Details** - Displays all product info, with add-to-cart and wishlist functionality.
4. **Cart and Wishlist Management** - Allows adding/removing items with contextual price calculations and error handling.
5. **Sorting and Filtering** - Enables users to sort items by price and view products by category.

---

## React Concepts Used
- **React Router** - For managing routes across the website.
- **Context API** - Used for handling global states like cart and wishlist data.
- **useState & useEffect** - To manage component states and lifecycle events.
- **useLocation & useNavigate** - Utilized for background color changes and modal navigation.
- **React Toastify** - For adding notifications upon adding items to cart or wishlist.
  
---

## Data Management
Data handling in GadgetHeaven is achieved through:
- **Context API** - Manages global states for cart and wishlist functionalities across components.
- **LocalStorage** - Optional usage for data persistence to retain cart and wishlist data after page reloads.

---

## Pages and Routes
### Main Pages
- **Home Page** - Features a banner, category sidebar, and gadget cards.
- **Details Page** - Displays comprehensive details for each product.
- **Dashboard** - Contains Cart and Wishlist tabs for item management.
- **Statistics Page** - Displays a composed chart of Price vs. Product Name.
- **404 Page** - Shown for non-existent routes.
  
### Additional Routes
- **Upcoming Products** - A dedicated route to showcase upcoming gadgets.

---