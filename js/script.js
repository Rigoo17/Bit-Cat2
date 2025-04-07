//  Select the hero image element
const heroImage = document.querySelector(".hero img");

//  Create an array of image paths
const images = [
    "images/Game-setup3.png",
    "images/Game-setup4.png"
];

//  Set an initial index
let index = 0;

//  Function to change the image
function switchImage() {
    index++; // Move to the next image
    if (index >= images.length) {
        index = 0; // Reset index if it exceeds the last image
    }
    heroImage.src = images[index]; // Change the image source
}

// Set an interval to change the image every 3 seconds
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
               <button class="add-to-cart" 
                             data-id="${product.id}" 
                             data-name="${product.name}" 
                             data-price="${product.price}">
                             Add to Cart
                </button>

            `;
           
            productList.appendChild(productDiv);
        });
    })
    .catch(error => console.error("Error fetching products:", error));
});


// Function to add a product to the cart
function addToCart(productId) {
    console.log("Product added to cart:", productId);

    // Example cart logic (you can expand this)
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(productId);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart!");
}


document.addEventListener("click", function(e) {
    if (e.target.classList.contains("add-to-cart")) {
        const button = e.target;
        const product = {
            id: button.dataset.id,
            name: button.dataset.name,
            price: button.dataset.price
        };
        addToCart(product);
    }
});

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
}
