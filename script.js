document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product 1", price: 29.99 },
    { id: 2, name: "Product 2", price: 49.99 },
    { id: 3, name: "Product 3", price: 19.99 },
    { id: 4, name: "Product 4", price: 39.99 },
    { id: 5, name: "Product 5", price: 79.99 },
  ];

  const cart = [];

  const productList = document.getElementById("product-list"); // we grabbed the product-list div

  const cartItems = document.getElementById("cart-items"); // we grabbed the cart-items
  console.log(cartItems);
  const emptyCartMessage = document.getElementById("empty-cart"); // we grabbed the empty cart message
  const cartTotalMessage = document.getElementById("cart-total"); // we grabbed the cart total
  const totalPriceDisplay = document.getElementById("total-price"); // we grabbed the total price display
  const checkOutBtn = document.getElementById("checkout-btn"); // we grabbed the checkout button

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
      <span>${product.name} - $ ${product.price.toFixed(2)}</span>
      <button data-id= "${product.id}">Add to Cart</button>
      `;
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      const productId = parseInt(event.target.getAttribute("data-id"));
      const product = products.find((product) => product.id === productId);
      addToCart(product);
    }
  });

  function addToCart(product) {
    cart.push(product);
    renderCart();
  }

  function renderCart() {
    cartItems.innerText = "";
    let totalPrice = 0;
    if (cart.length > 0) {
      emptyCartMessage.classList.add("hidden");
      cartTotalMessage.classList.remove("hidden");
      cart.forEach((item, index) => {
        totalPrice += item.price;
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
        ${item.name} - $${item.price.toFixed(2)}
        `;
        cartItems.appendChild(cartItem);
        totalPriceDisplay.textContent = `
        ${totalPrice.toFixed(2)}
        `;
      });
    } else {
      emptyCartMessage.classList.remove("hidden");
      totalPriceDisplay.textContent = `$0.00`;
    }
  }

  checkOutBtn.addEventListener("click", () => {
    cart.length = 0;
    alert("Checkout sucessfully");
    renderCart();
  });
});
