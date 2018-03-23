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