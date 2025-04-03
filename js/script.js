// Step 1: Select the hero image element
const heroImage = document.querySelector(".hero img");

// Step 2: Create an array of image paths
const images = [
    "images/Game-setup3.png",
    "images/Game-setup4.png"
];

// Step 3: Set an initial index
let index = 0;

// Step 4: Function to change the image
function switchImage() {
    index++; // Move to the next image
    if (index >= images.length) {
        index = 0; // Reset index if it exceeds the last image
    }
    heroImage.src = images[index]; // Change the image source
}

// Step 5: Set an interval to change the image every 3 seconds
setInterval(switchImage, 3000);




document.addEventListener("DOMContentLoaded", function() {
    fetch("api.php?action=getProducts")
    .then(response => response.json())
    .then(data => {
        let productList = document.getElementById("product-list");
        productList.innerHTML = ""; 

        data.forEach(product => {
            let productDiv = document.createElement("div");
            productDiv.classList.add("product-card");


            productDiv.innerHTML = `
                <img src="images/${product.image_url}" alt="${product.name}" class="product-image">
                <h3 class="product-title">${product.name}</h3>  
                <p class="product-description">${product.description}</p>  
                <p class="product-price">Price: Ksh ${product.price}</p> 
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            `;
           
            productList.appendChild(productDiv);
        });
    })
    .catch(error => console.error("Error fetching products:", error));
});


