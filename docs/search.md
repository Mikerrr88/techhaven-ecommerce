# Product Search Feature Documentation

The product search feature is implemented on the `products.html` page and is driven by the logic in `js/search.js`. It allows users to filter a static list of products based on a search query.

## 1. Data Source

The product data is stored in a static JSON file: `/data/products.json`.

Each product object contains the following fields:

*   `id`: Unique identifier (Number)
*   `name`: Product name (String)
*   `category`: Product category (String)
*   `price`: Product price (Number)
*   `description`: Short product description (String)
*   `image`: URL to a placeholder image (String)

## 2. Product Loading

Upon loading `products.html`, the `js/search.js` script performs the following steps:

1.  It uses the native `fetch` API to asynchronously load the contents of `/data/products.json`.
2.  The JSON data is parsed and stored in the global `allProducts` array.
3.  The `displayProducts()` function is called to render all products on the page initially.

## 3. Filtering Logic

The core filtering logic resides in the `filterProducts(query)` function.

*   It converts the user's `query` to lowercase and trims whitespace for case-insensitive matching.
*   It iterates through the `allProducts` array and checks if the search term is included in the product's **name**, **category**, or **description**.
*   The search is performed in real-time as the user types (via the `keyup` event listener) and when the search button is clicked.

## 4. Rendering Products

The `displayProducts(products)` function is responsible for dynamically generating the HTML for the product grid.

*   It takes an array of products (either all products or the filtered subset).
*   It uses the `map` and `join('')` array methods to efficiently create a single HTML string for all product cards.
*   Each product card includes the name, category, price, description, and an image.
*   If the filtered array is empty, a "No results found" message is displayed.

## 5. Simulated Cart Interaction

A simple `addToCart(productId)` function is included to demonstrate interaction with the authentication system:

*   It checks if a `currentUser` exists in LocalStorage.
*   If not logged in, it prompts the user to log in and redirects them to `login.html`.
*   If logged in, it displays an alert confirming the item has been added to the cart.
