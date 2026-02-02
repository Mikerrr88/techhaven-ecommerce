# TechHaven - E-commerce Mockup Project

This project is a simple, client-side e-commerce mockup built using **Vanilla JavaScript, HTML, and CSS**. It serves as a final assignment demonstrating core web development concepts, including responsive design, client-side form validation, local storage for session management, and data filtering from a static JSON file.

## Features

| Feature | Description | Implementation Details |
| :--- | :--- | :--- |
| **Responsive Design** | The layout adapts seamlessly to different screen sizes, ensuring a good user experience on desktop, tablet, and mobile devices. | Achieved using CSS Flexbox and Media Queries in `css/style.css`. |
| **User Authentication** | Simulated login and signup functionality with client-side validation. | User data and session state are managed using the browser's `LocalStorage`. See [auth.md](docs/auth.md) for details. |
| **Product Catalog** | 44+ products across 10 categories with advanced filtering and sorting. | Products loaded from `data/products.json` with real-time filtering by category, search, and sort options. See [categories.md](docs/categories.md) for details. |
| **Category Filtering** | Browse products by category with visual filter buttons. | 10 categories including Laptops, Smartphones, Tablets, Wearables, Audio, Gaming, Photography, Smart Home, and Accessories. |
| **Product Search** | Allows users to filter products displayed on the `products.html` page. | Filters a static list of products loaded from `data/products.json` based on name, category, and description. See [search.md](docs/search.md) for details. |
| **Sorting** | Sort products by price (low to high, high to low) or name. | Client-side sorting that works in combination with category and search filters. |
| **Shopping Cart** | Full-featured shopping cart with add/remove items, quantity management, and checkout. | Cart data persists per user in `LocalStorage` with real-time updates and notifications. See [cart.md](docs/cart.md) for details. |
| **Session Management** | The navigation bar dynamically updates to show "Login/Sign Up" or a "Hi, [Username]" message with a logout button. | Handled by checking the `currentUser` key in `LocalStorage`. |

## Project Structure

The project follows a clean and organized folder structure:

```
ecommerce-project/
├── index.html              # Homepage
├── login.html              # Login form page
├── signup.html             # Sign Up form page
├── products.html           # Product listing and search page
├── cart.html               # Shopping cart page
├── css/
│   └── style.css           # All project styles, including responsiveness
├── js/
│   ├── main.js             # Shared functionality (e.g., mobile menu, UI updates)
│   ├── auth.js             # Authentication logic and form validation
│   ├── search.js           # Product fetching and search/filtering logic
│   └── cart.js             # Shopping cart management and functionality
├── data/
│   └── products.json       # Static product data source
└── docs/
    ├── README.md           # This file
    ├── auth.md             # Detailed documentation on authentication
    ├── search.md           # Detailed documentation on product search
    ├── cart.md             # Detailed documentation on shopping cart
    └── categories.md       # Detailed documentation on categories and filtering
```


