
loadCountrys();

async function loadCountrys() {
    
    let res = await fetch("https://fakestoreapi.com/products");
    let items = await res.json();
    let body = "";
    items.forEach(element => {
        console.log(element);
        body+=`
            <div class="col">
                <div class="card shadow-sm">
                  <img src=${element.image} alt="">
                  <div class="card-body">
                  <h2>${element.title}</h2>
                    <p class="card-text">${element.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <p class="p-4 fw-bold">${element.price}</p>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Buy</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small class="text-body-secondary">${element.rating.rate}</small>
                    </div>
                  </div>
                </div>
              </div>
        `;

        
        
    });

    console.log(body);

    document.getElementById("row").innerHTML=body;
    
}


// let customer = new Customer()
// .setName("Nimal")
// .setAddress("Panadura");

// console.log(customer);