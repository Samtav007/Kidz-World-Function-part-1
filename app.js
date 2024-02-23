const cartValue = document.getElementById("cart-value");
const cartButton = document.getElementById("cart");
const addButtons = document.querySelectorAll(".button");

const items = [
  { name: "This was our pact", quantity: 0, price: 7.49 },
  { name: "The famous five", quantity: 0, price: 4.59 },
  { name: "Matilda", quantity: 0, price: 6.8 },
  { name: "Harry Potter", quantity: 0, price: 10.0 },
  { name: "For Young Readers", quantity: 0, price: 7.29 },
  { name: "Wimpy Kid - DIY", quantity: 0, price: 4.99 },
  { name: "Dart Board", quantity: 0, price: 17.49 },
  { name: "Connect Four", quantity: 0, price: 19.99 },
  { name: "Jenga", quantity: 0, price: 20.99 },
  { name: "Monopoly", quantity: 0, price: 19.49 },
  { name: "Bookmarks", quantity: 0, price: 12.49 },
  { name: "Birthday Card", quantity: 0, price: 12.49 },
  { name: "Stuffed toys", quantity: 0, price: 15.99 },
  { name: "Dream catcher drawing", quantity: 0, price: 18.49 },
];

// Function to update the cart value displayed
function updateCart() {
  const cartQuantity = items.reduce((total, item) => total + item.quantity, 0);
  cartValue.innerHTML = cartQuantity;
}

// Event listener for each add button
addButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    items[index].quantity++;
    updateCart();
  });
});

// Function to calculate and update the total price
function updatePrice() {
  const totalPriceInCents = items.reduce(
    (total, item) => total + item.quantity * item.price * 100,
    0
  );
  return { dollars: Math.floor(totalPriceInCents / 100), cents: totalPriceInCents % 100 };
}

// Event listener for the cart button
cartButton.addEventListener("click", () => {
  const { dollars, cents } = updatePrice();

  // Logging items and total amount
  items.forEach((item) => {
    if (item.quantity !== 0) {
      console.log(`Item name: ${item.name} - Quantity: ${item.quantity}`);
    }
  });
  console.log(`The total amount is ${dollars}$ and ${cents} cents`);
});
