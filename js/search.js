// Product Search and Filtering Logic

let allProducts = [];

document.addEventListener('DOMContentLoaded', () => {
    const productsGrid = document.getElementById('productsGrid');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    // Fetch products from JSON
    fetch('data/products.json')
        .then(response => response.json())
        .then(data => {
            allProducts = data;
            displayProducts(allProducts);
        })
        .catch(error => {
            console.error('Error loading products:', error);
            if (productsGrid) {
                productsGrid.innerHTML = '<p>Error loading products. Please try again later.</p>';
            }
        });

    // Search functionality
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            filterProducts(searchInput.value);
        });

        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                filterProducts(searchInput.value);
            }
            // Real-time filtering
            filterProducts(searchInput.value);
        });
    }
});

function displayProducts(products) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    if (products.length === 0) {
        productsGrid.innerHTML = '<p class="no-results">No products found matching your search.</p>';
        return;
    }

    productsGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <span class="category">${product.category}</span>
                <h3>${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <p class="description">${product.description}</p>
                <button class="btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

function filterProducts(query) {
    const searchTerm = query.toLowerCase().trim();
    const filtered = allProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm) || 
        product.category.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    displayProducts(filtered);
}

function addToCart(productId) {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        alert('Please login to add items to your cart.');
        window.location.href = 'login.html';
        return;
    }
    
    const product = allProducts.find(p => p.id === productId);
    alert(`Added ${product.name} to your cart!`);
}
