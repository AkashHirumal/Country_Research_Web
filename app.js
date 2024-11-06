

loadcountries();

async function loadcountries() {
    
    let res = await fetch("https://restcountries.com/v3.1/all");
    let countries = await res.json();
    let body = "";
    countries.forEach(element => {
        console.log(element);
        body+=`
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <h3 class="mb-0">${element.name.common}</h3>
          <div class="mb-1 text-muted">${element.region}</div>
          <p class="card-text mb-auto">Time Zone : ${element.timezones}</p>
          <p class="card-text mb-auto">Continents : ${element.continents}</p>
          <br><br>
          <a href="#" class="stretched-link" onclick="${element.maps.googleMaps}">View Map</a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <img src= ${element.flags.png} width="300" height="200" alt="">

        </div>
      </div>
    </div>
        `;

        
        
    });

    console.log(body);

    document.getElementById("row").innerHTML=body;
    
}

function searchCountry(){
    console.log("Search!!");
    let txtSearch = document.getElementById("txtSearch").value;
    fetch( `https://restcountries.com/v3.1/name/${txtSearch}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        let body="";
        data.forEach(element => {
            body+=`
            
        <div class="col-md-4">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">

        <div class="col p-4 d-flex flex-column position-static">
                <div class="col-auto d-none d-lg-block">
          <img src= ${element.flags.png} width ="350" height="250"alt="">

        </div>
          <h4 class="mb-0">${element.name.common}</h4>
          
          <p class="card-text mb-auto">Capital : ${element.capital}</p>
          <div class="mb-1 text-muted">Region :${element.region}</div>
          <button type="button" class="btn btn-info">View On Google Map</button>
        </div>

      </div>
    </div>
            
            `
        });
        document.getElementById("row").innerHTML=body;
        
    })
    
}