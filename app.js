

loadcountries();

async function loadcountries() {
    
    let res = await fetch("https://restcountries.com/v3.1/all");
    let countries = await res.json();
    let body = "";
    countries.forEach(element => {
        console.log(element);
        body+=`
          <div class="col-md-6">
            <div class="row g-0 border rounded  overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex crdflag flex-column position-static">
                <h3 class="mb-0">${element.name.common}</h3>
                <div class="mb-1 text-muted">${element.region}</div>
                <p class="card-text mb-auto"><b>Population :</b>: ${element.population}</p>
                <p class="card-text mb-auto"><b>Capital : </b>${element.capital}</p>
                <p class="card-text mb-auto"><b>Continents : </b>${element.continents}</p>
                <br><br>
                <a href="#" class="stretched-link" onclick="${element.maps.openStreetMaps}">View Map</a>
              </div>
            <div class="col-auto d-none d-lg-block">
              <img src= ${element.flags.png} width="300" height="208" alt="">

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
    let searchValue = document.getElementById("txtSearch").value;
    fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        let body="";
        data.forEach(element => {
            body+=`
            <div class="card2 " style="width: 80rem;">
              <center><img src= ${element.flags.png} width="500" height="300" alt=""></center>
              <div class="card-body">
                <h1 class="card-title title2">${element.name.common}</h1>
                <h4 class="card-text title2">${element.region}</h4>
              </div>
              <br>
              <table class="table">
                <tbody>
                  <tr>
                    <td><b>Population :</b>: ${element.population}</td>
                    <td><b>Official : </b>${element.name.official}</td>
                    <td><b>Area :</b> ${element.area}</td>
                  </tr>
                  <tr>
                    <td><b>Capital : </b>${element.capital}</td>
                    <td><b>Subregion : </b>${element.subregion}</td>
                    <td><b>Timezones :</b> ${element.timezones}</td>
                  </tr>
                  <tr>
                    <td><b>Continents :</b> ${element.continents}</td>
                    <td><b>Latlng : </b>${element.latlng}</td>
                    <td><b>Start Of Week :</b> ${element.startOfWeek}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            `
        });
        document.getElementById("row").innerHTML=body;
        
    })
    
}