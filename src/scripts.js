



            // Function to toggle the sidebar open and closed when the hamburger menu is clicked
    function toggleSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('active');
    }

    
    document.addEventListener('click', function(event) {
        const sidebar = document.querySelector('.sidebar');
        const hamburgerMenu = document.querySelector('.hamburger-menu');

        // If the click is outside the sidebar and the hamburger menu, close the sidebar
        if (!sidebar.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            sidebar.classList.remove('active');
        }
    });
        let cartCount = 0; // Initialize cart count

        function addToCart() {
            cartCount++; // Increment the cart count each time the button is clicked
            updateCartLink();
        }

        function updateCartLink() {
            const cartLink = document.getElementById('cart-link');
            cartLink.innerHTML = `🛒 Cart (${cartCount})`; // Update the cart link text
        }

            // Function to update the text of the clicked "Add to Cart" button
            function updateAddCartBtn(event) {
                const addBtn = event.target;  // This refers to the clicked button
                addBtn.innerHTML = 'Added to Cart'; // Update the text of the clicked button
            }

            // Add event listener to all "Add to Cart" buttons
            const addBtns = document.querySelectorAll('.add');
            addBtns.forEach(button => {
                button.addEventListener('click', updateAddCartBtn); // Attach the event to each button
            });

            // document.addEventListener('scroll', function () {
            //     if (window.scrollY > 250) {
            //         document.querySelector('#products').scrollIntoView({
            //             behavior: 'smooth'
            //         });
            //     }
            // });



// // Initialize cart
// let cart = [];

// // Get DOM elements
// const cartButton = document.querySelector(".cart a");
// const cartContainer = document.querySelector(".cart-container");
// const buyButton = document.querySelector(".add");

// // Function to add a product to the cart
// function addToCart(productId, productName, productPrice) {
//   const product = { id: productId, name: productName, price: productPrice };
//   cart.push(product);
//   updateCartDisplay();
// }

// // Function to update cart display
// function updateCartDisplay() {
//   const cartList = cartContainer.querySelector(".cart-list");
//   cartList.innerHTML = ""; // Clear the cart list before updating

//   cart.forEach((item) => {
//     const cartItem = document.createElement("li");
//     cartItem.classList.add("cart-item");
//     cartItem.textContent = `${item.name} - $${item.price}`;
//     cartList.appendChild(cartItem);
//   });

//   // Update cart button text to show the number of items
//   cartButton.textContent = `Cart (${cart.length})`;
// }

// // Event listener for "Buy" button
// buyButton.addEventListener("click", () => {
//   if (cart.length > 0) {
//     alert("Proceeding to checkout...");
//     // Implement checkout logic here
//   } else {
//     alert("Your cart is empty.");
//   }
// });

// // Example of adding products to cart (You can replace this with dynamic data)
// const exampleProduct1 = document.querySelector(".product1 button");
// const exampleProduct2 = document.querySelector(".product2 button");

// exampleProduct1.addEventListener("click", () => {
//   addToCart(1, "Product 1", 29.99);
// });

// exampleProduct2.addEventListener("click", () => {
//   addToCart(2, "Product 2", 49.99);
// });



