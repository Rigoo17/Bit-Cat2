document.addEventListener("DOMContentLoaded", function () {
    const cartContainer = document.getElementById("cart-container");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    function renderCart() {
      cartContainer.innerHTML = "";
  
      if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
      }
  
      let total = 0;
  
      cart.forEach((item, index) => {
        total += parseFloat(item.price);
  
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");
        itemDiv.innerHTML = `
          <h3>${item.name}</h3>
          <p>Price: Ksh ${item.price}</p>
          <button class="remove-button" data-index="${index}">Remove</button>
          <hr>
        `;
        cartContainer.appendChild(itemDiv);
      });
  
      // 🧾 Total price section
      const totalDiv = document.createElement("div");
      totalDiv.classList.add("total-price");
      totalDiv.innerHTML = `<h2>Total: Ksh ${total.toFixed(2)}</h2>`;
      cartContainer.appendChild(totalDiv);
    }
  
    renderCart();
  
    // 🧹 Clear all on Close button
    const closeButton = document.querySelector(".close-button");
    if (closeButton) {
      closeButton.addEventListener("click", function () {
        localStorage.removeItem("cart");
        alert("Cart has been cleared.");
        location.reload(); // or window.location.href = "index.html";
      });
    }
  
    // ❌ Remove individual items
    cartContainer.addEventListener("click", function (e) {
      if (e.target.classList.contains("remove-button")) {
        const index = parseInt(e.target.dataset.index);
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart(); // Re-render cart
      }
    });
  });
  