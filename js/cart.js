document.addEventListener('DOMContentLoaded', () => {
    const orderSummary = document.getElementById('order-summary');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');
    const placeOrderButton = document.getElementById('place-order');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let subtotal = 0;
    let total = 0;


    function updateOrderSummary() {
        orderSummary.innerHTML = '';
        subtotal = 0;

        cart.forEach(item => {

            subtotal += item.price * item.quantity;


            const listItem = document.createElement('li');
            listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
            listItem.innerHTML = `
                ${item.title} (x${item.quantity})
                <span>₦${(item.price * item.quantity).toFixed(2)}</span>
            `;

            orderSummary.appendChild(listItem);
        });

        
        subtotalElement.textContent = `₦${subtotal.toFixed(2)}`;
        total = subtotal;
        totalElement.textContent = `₦${total.toFixed(2)}`;
    }


    placeOrderButton.addEventListener('click', () => {
        alert('Order placed successfully!');
        localStorage.removeItem('cart');  
        window.location.href = './thankyou.html';  
    });

    updateOrderSummary();  
});
