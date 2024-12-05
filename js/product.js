function updateQuantity() {
    const quantity = document.getElementById("quantity").value;
    document.getElementById("quantity-display").textContent = quantity;
    }
    document.addEventListener("DOMContentLoaded", function() {
    updateQuantity();
    });