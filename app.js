document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("product-list");

    // Mock data - replace this with actual data from your backend
    const products = [
        { id: 1, name: "Product 1", price: 20 },
        { id: 2, name: "Product 2", price: 30 },
        { id: 3, name: "Product 3", price: 25 },
    ];

    // Display products on the page
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
});

function addToCart(productId) {
    // Add logic to handle adding products to the cart
    console.log(`Product ${productId} added to the cart.`);
}
