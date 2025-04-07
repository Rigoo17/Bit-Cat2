document.addEventListener("DOMContentLoaded", function () {
    fetch("controllers.php")
        .then(response => response.json())
        .then(data => {
            let container = document.getElementById("controllers-list");
            container.innerHTML = ""; // Clear previous content
            
            data.forEach(product => {
                container.innerHTML += `
                     <div class="product-card">
                        <img src="images/${product.image_url}" alt="${product.name}" class="product-image">
                        <h3 class="product-title">${product.name}</h3>
                        <p class ="product-description">${product.description}</p>
                        <p class ="product-price">Price: $${product.price}</p>
                        <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                      </div>
                        `;
            });
        })
        .catch(error => console.error("Error fetching controllers:", error));
});