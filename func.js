function openCart() {
    document.getElementById("cartBox").classList.add("active");
}

function closeCart() {
    document.getElementById("cartBox").classList.remove("active");
}


let cart = [];

function openCart() {
    document.getElementById("cartBox").classList.add("active");
}

function closeCart() {
    document.getElementById("cartBox").classList.remove("active");
}

function addToCart(name, price) {

    let existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    updateCart();
}

function updateCart() {

    let cartItems = document.getElementById("cartItems");
    let cartTotal = document.getElementById("cartTotal");

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {

        cartItems.innerHTML =
            `<p class="empty-cart">Your cart is empty.</p>`;

    } else {

        cart.forEach((item, index) => {

            let itemTotal = item.price * item.quantity;

            total += itemTotal;

            cartItems.innerHTML += `
                <div class="cart-item">

                    <div>
                        <h4>${item.name}</h4>
                        <p>₱${item.price} × ${item.quantity}</p>
                    </div>

                    <button 
                        class="remove-btn"
                        onclick="removeFromCart(${index})">
                        Cancel
                    </button>

                </div>
            `;
        });
    }

    cartTotal.textContent = total;
}

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


function checkout() {

    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    alert("Your order is done! Please wait for your order.");

    cart = [];

    updateCart();

    closeCart();
}

function checkout() {

    if (cart.length === 0) {
        return;
    }

    cart = [];

    updateCart();
    closeCart();

    document.getElementById("orderSuccess").classList.add("active");
}

function closeSuccess() {
    document.getElementById("orderSuccess").classList.remove("active");
}