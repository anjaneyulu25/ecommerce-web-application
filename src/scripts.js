
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
            const addBtns = document.querySelectorAll(".add-to-cart");
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


