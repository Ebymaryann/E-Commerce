function getPost() {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then((data) => {
            let postBody = document.getElementById("category-body");
            let blogdetails = '<div class="row">'; 

            
            for (let i = 0; i < 4; i++) {
                blogdetails += `
                    <div class="col-lg-3 col-md-6 mb-4"> <!-- Column for each product -->
                        <div class="card h-100 category">
                            <div class="card-body">
                                <img src="${data[i].image}" alt="${data[i].title}" class="img-fluid" />
                                <h1 class="h5">${data[i].title}</h1>
                                <p class="price">₦${data[i].price}</p>
                            </div>
                        </div>
                    </div>
                `;
            }

            blogdetails += '</div>'; 

            postBody.innerHTML = blogdetails;
        });
}

getPost();
