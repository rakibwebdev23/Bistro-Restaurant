# Bistro Boss Restaurant

Bistro Boss Restaurant is a web application built using React.js, Vite, Tailwind CSS, and various libraries for frontend functionality. The project provides a restaurant management platform with CRUD operations, token-based authentication for admin and user roles, and integrates MongoDB for database management and Firebase for authentication.

## Features

- **User Authentication**: Users can sign in using Firebase Authentication.
- **Admin Authentication**: Admin users are authenticated with tokens to manage CRUD operations.
- **CRUD Operations**: Users can perform create, read, update, and delete operations.
- **Database Integration**: MongoDB is used for storing data such as menu items, orders, and user information.
- **Responsive Design**: The application is responsive and optimized for various screen sizes using Tailwind CSS and DaisyUI.
- **Stripe Payment Integration**: Stripe is used for handling online payments.
- **Rating System**: A rating system for customers to rate the dishes using the `@smastrom/react-rating` component.
- **Carousel for Menu Display**: A responsive carousel for displaying dishes and specials using the `react-responsive-carousel` package.
- **Admin Panel**: Admins can manage restaurant data and user roles.

## Pages

### 1. **Home Page**

The Home page serves as the landing page for the Bistro Boss Restaurant. It includes:
- A **hero section** with restaurant details and featured menu items.
- **Navigation links** to the Menu, Order, Cart, and Dashboard pages.
- **Promo banners** showcasing daily deals or new dishes.

### 2. **Menu Page**

The Menu page displays all the available dishes in the restaurant with the following features:
- A **filterable list** of menu items (Pizza, Burgers, Desserts, etc.).
- Each dish has an **image**, **name**, **description**, and **price**.
- An option to **add items to the order cart** with the ability to select quantity and extras.

### 3. **Order Page**

The Order page allows customers to place an order for their selected menu items. Features include:
- A **dynamic list** of items added to the cart, with quantity and price information.
- An option to **edit or remove items** from the cart.
- A **total price calculation** that includes taxes and discounts.
- **Stripe payment integration** for secure checkout and payment.

### 4. **Order Cart Page**

The Order Cart page provides a summary of the order before proceeding to checkout. Features include:
- A complete **overview of the items in the cart**.
- **Adjustable quantities** for each item.
- **Discounts and promotions** applied to the total.
- A **checkout button** that directs to the payment page.
- A **continue shopping** option that redirects to the Menu page.

### 5. **Dashboard (Admin Panel)**

The Dashboard is an admin-only page where restaurant managers can manage various aspects of the restaurant:
- **Menu Management**: Add, update, or delete menu items.
- **Order Management**: View and update the status of orders (e.g., pending, completed).
- **User Management**: Admins can manage user accounts, including verifying roles (admin or customer).
- **Analytics**: View reports on orders, revenue, and popular menu items using charts (using `recharts`).
