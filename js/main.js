var selectRegiones = document.getElementById("regiones");
var selectComunas = document.getElementById("comunas");
var selectTipo = document.getElementById("tipo");
var selectVenta = document.getElementById("venta");
var selectCodigo = document.getElementById("codigo");

function poblarSelectRegiones(){
    regiones.forEach(function(r){
        let option = document.createElement("option");
        option.value = r.region;
        option.innerText = r.region;
        selectRegiones.appendChild(option);
    })
}


function poblarSelectComunas(r){
    let comunas = regiones.filter(function(e){
        if(e.region === r){
            return e;
        }
    })

    if(comunas.length == 0){
        alert("no se encontraron comunas");
    } else {
        let comuna = comunas[0];
        comuna.comunas.forEach(function(e){
            let option = document.createElement("option");
            option.value = e;
            option.innerText = e;
            selectComunas.appendChild(option);
        })
    }
}

function applyFilter(){
    if(selectCodigo.value === ""){
        saveSessionStorage("search",selectVenta.value,selectTipo.value,selectRegiones.value,selectComunas.value);
    } else {
        saveSessionStorage("cod",selectCodigo.value);
    }
}

function saveSessionStorage(q,a,b,c,d){
    if(q === "search"){
        let str = Base64.encode(new String(a.toLowerCase() + "," + b.toLowerCase() + "," + c.toLowerCase() + "," + d.toLowerCase()));
        sessionStorage.setItem("search",str);
        window.location.href = "resultado.html?page=1";
    } else if(q === "cod"){
        window.location.href = "resultado.html?code=" + a.toLowerCase();
    }
}


function poblarSlider(arr){
    arr.forEach(function(i){
        var tmp = `<div class="card">
        <img class="card-img-top" src="${i.cover}" alt="">
        <div class="details">
            <div class="row">
                <div class="col-md-4">
                    <span><i class="fas fa-bed"></i> </span><span>${i.dormitorios}</span>
                </div>
                <div class="col-md-4">
                    <span><i class="fas fa-bath"></i> </span><span>${i.banos}</span>
                </div>
                <div class="col-md-4">
                  <span>${i.meters}</span><span> m2</span>
                </div>
            </div>
          </div>
        <div class="card-body">
          <h4 class="card-title text-left">${i.title}</h4>
          <p class="card-text text-left">${i.estracto}</p>
        </div>
        <div class="card-footer">
          <a href="ficha.html?cod=${i.code}" class="txt-yellow text-left">Ver Mas</a>
        </div>
      </div>`;

      let container = document.createElement("div");
      container.classList = "swiper-slide";
      container.innerHTML = tmp;
      document.getElementById("sliderContainer").appendChild(container);
    })
}
