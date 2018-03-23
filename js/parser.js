function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getSessionParser(str){
    str = Base64.decode(str).split(",");
    return {venta: str[0],tipo:str[1],region:str[2],comuna:str[3]};
}

function getSessionStorage(){
    return sessionStorage.getItem("search");
}

function activePagination(num){
    var ul = document.querySelector("#pagination");
    var lis = ul.querySelectorAll("li");
    for(var i = 0; i < lis.length; i++){
        if(i == num){
            lis[i].classList.add("active");
        } else {
            lis[i].classList.remove("active");
        }
    }
}


function createPagination(total){
    var ul = document.querySelector("#pagination");
    let prev = document.createElement("li");
    prev.classList = "page-item";
    prev.innerHTML= '<a class="page-link" href="#" tabindex="-1">Anterior</a>';
    if(getParameterByName("page") == 1){
        prev.classList.add("disabled");
    } else {
        prev.classList.remove("disabled");
        prev.addEventListener("click", function(e){
            e.preventDefault();
            window.location.href = "resultado.html?page=" + (parseInt(getParameterByName("page")) - 1) ;            
        });
    }
    ul.appendChild(prev);

    for(var i = 0;i<total;i++){
        let item = document.createElement("li");
        item.classList = "page-item";
        let link = document.createElement("a");
        link.classList = "page-link";
        link.href = "#";
        link.innerText = i + 1;
        link.addEventListener("click", function(e){
            e.preventDefault();
            window.location.href = "resultado.html?page=" + this.innerText;
        });

        item.appendChild(link);
        ul.appendChild(item);
    }

    let next = document.createElement("li");
    next.classList = "page-item disabled";
    next.innerHTML= '<a class="page-link" href="#">Siguiente</a>';
    if(getParameterByName("page") == total){
        next.classList.add("disabled");
    } else {
        next.classList.remove("disabled");
        next.addEventListener("click", function(e){
            e.preventDefault();
            window.location.href = "resultado.html?page=" + (parseInt(getParameterByName("page")) + 1) ;            
        });
    }
    ul.appendChild(next);
    activePagination(parseInt(getParameterByName("page")));
}

function pagToPag(pag,totals,items){
    var cant = document.getElementById("cant");
    var actual = document.getElementById("actual");
    var total = document.getElementById("total");

    cant.innerText = items;
    actual.innerText = pag;
    total.innerText = totals;
}