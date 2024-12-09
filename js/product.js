function updateQuantity() {
    const quantityElement = document.getElementById("quantity");
    const displayElement = document.getElementById("quantity-display");
    if (quantityElement && displayElement) {
        const quantity = quantityElement.value;
        displayElement.textContent = quantity;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    updateQuantity();
});

document.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        updateQuantity();
    }
});
// https://medium.com/@matuzo/writing-javascript-with-accessibility-in-mind-a1f6a5f467b9
