function getPost() {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then((data) => {
            let Cartab = document.getElementsByClassName("cartTab");
            let btnadd = document.getElementsByClassName("add-to-cart");
            let postBody = document.getElementById("product");

            let blogdetails = '<div class="row">'; 

            
            for (let i = 0; i < 4; i++) {
                blogdetails += `
                    <div class="col-lg-6 col-md-6 mb-4" > <!-- Column for each product -->
                        <div class="card h-0 shop">
                            <div class="card-body">
                                <img src="${data[i].image}" alt="${data[i].title}" class="img-fluid" style="width:50%" />
                                <h1 class="h5">${data[i].title}</h1>
                                <p class="description">${data[i].description}</p>
                                <p class="price">₦${data[i].price}</p>
                                <button class="btn btn-primary add-to-cart" 
                                    data-title="${data[i].title}" 
                                    data-image="${data[i].image}" 
                                    data-description="${data[i].description}" 
                                    data-price="${data[i].price}">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }
            blogdetails += '</div>'; 

            let secondRow = '<div class="row">';

            
            for (let i = 4; i < 8; i++) {
                secondRow += `
                    <div class="col-lg-6 col-md-6 mb-4" > <!-- Column for each product -->
                        <div class="card h-0 shop ">
                            <div class="card-body">
                                <img src="${data[i].image}" alt="${data[i].title}" class="img-fluid" style = "width: 50%" />
                                <h1 class="h5">${data[i].title}</h1>
                                <p class="description">${data[i].description}</p>
                                <p class="price">₦${data[i].price}</p>
                                <button class="btn btn-primary add-to-cart" 
                                    data-title="${data[i].title}" 
                                    data-image="${data[i].image}" 
                                    data-description="${data[i].description}" 
                                    data-price="${data[i].price}">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }
            secondRow += '</div>'; 


            let thirdRow = '<div class="row">'; 

            
            for (let i = 8; i < 12; i++) {
                thirdRow += `
                    <div class="col-lg-6 col-md-6 mb-4" > <!-- Column for each product -->
                        <div class="card h-0 shop">
                            <div class="card-body">
                                <img src="${data[i].image}" alt="${data[i].title}" class="img-fluid" style="width:40%" />
                                <h1 class="h5">${data[i].title}</h1>
                                <p class="description">${data[i].description}</p>
                                <p class="price">₦${data[i].price}</p>
                                
                                <button class="btn btn-primary add-to-cart" 
                                    data-title="${data[i].title}" 
                                    data-image="${data[i].image}" 
                                    data-description="${data[i].description}" 
                                    data-price="${data[i].price}">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }
            thirdRow += '</div>';

            let fourRow = '<div class="row">';

            
            for (let i = 12; i < 16; i++) {
                fourRow += `
                    <div class="col-lg-6 col-md-6 mb-4"> <!-- Column for each product -->
                        <div class="card h-0 shop">
                            <div class="card-body">
                                <img src="${data[i].image}" alt="${data[i].title}" class="img-fluid" style="width:50%"/>
                                <h1 class="h5">${data[i].title}</h1>
                                <p class="description" >${data[i].description}</p>
                                <p class="price">₦${data[i].price}</p>
                                <button class="btn btn-primary add-to-cart" 
                                    data-title="${data[i].title}" 
                                    data-image="${data[i].image}" 
                                    data-description="${data[i].description}" 
                                    data-price="${data[i].price}">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }
            fourRow += '</div>';

            let fifthRow = '<div class="row">'; 

           
            for (let i = 16; i < 20; i++) {
                fifthRow += `
                    <div class="col-lg-6 col-md-6 mb-4"> <!-- Column for each product -->
                        <div class="card h-0 shop">
                            <div class="card-body">
                                <img src="${data[i].image}" alt="${data[i].title}" class="img-fluid" style="width:50%"/>
                                <h1 class="h5 shop-heading">${data[i].title}</h1>
                                <p class="description">${data[i].description}</p>
                                <p class="price">₦${data[i].price}</p>
                                <button class="btn btn-primary add-to-cart" 
                                    data-title="${data[i].title}" 
                                    data-image="${data[i].image}" 
                                    data-description="${data[i].description}" 
                                    data-price="${data[i].price}">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }
            fifthRow += '</div>';



            postBody.innerHTML = blogdetails + secondRow + thirdRow + fourRow + fifthRow; 

            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', (e) => {
                    const title = e.target.getAttribute('data-title');
                    const image = e.target.getAttribute('data-image');
                    const price = e.target.getAttribute('data-price');
                    addToCart(title, image, price);
                });
            });


            
        });
        let cartCount = 0;
        

function addToCart(title, image, price) {
   
    let cartTab = document.querySelector('.cartTab');
    let cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    let itemPrice = parseFloat(price);

    cartItem.innerHTML = `
        <img src="${image}" alt="${title}" class="cart-img">
        <div class="cart-details">
            <h5>${title}</h5>
            <p class="cart-price">₦${itemPrice.toFixed(2)}</p>
            
        </div>
        <button class="btn btn-danger remove-item">Remove</button>
      
    `;

    cartTab.appendChild(cartItem);
    

    cartItem.querySelector('.remove-item').addEventListener('click', () => {
        cartItem.remove();
        updateCartCount(-1); 
        updateCartSubtotal(-itemPrice);
    });

    updateCartCount(1); 
    updateCartSubtotal(itemPrice);

    alert(`${title} has been added to your cart!`);
}

function updateCartCount(change) {
    cartCount += change;
    document.getElementById('cart-count').textContent = cartCount;
}

let cartSubtotal = 0; 

function updateCartSubtotal(priceChange) {
    cartSubtotal += priceChange; 
    document.getElementById('cart-subtotal').textContent = `Subtotal: ₦${cartSubtotal.toFixed(2)}`;
    updateCartTotal(); 
}

function updateCartTotal() {
    const taxRate = 0.05; 
    const total = cartSubtotal + (cartSubtotal * taxRate);
    document.getElementById('cart-total').textContent = `Total: ₦${total.toFixed(2)}`;
}

const cartIcon = document.getElementById('cart');
let cartTab = document.querySelector('.cartTab');

cartIcon.addEventListener('click', () => {
    cartTab.style.display = cartTab.style.display === 'none' || cartTab.style.display === '' ? 'block' : 'none';
});



        
}

getPost();



