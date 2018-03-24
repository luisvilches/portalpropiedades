var title = document.getElementById("titulo");
var price = document.getElementById("price");
var transa = document.getElementById("transa");
var galeria = document.getElementById("galeria");
var cod = document.getElementById("cod");
var m2 = document.getElementById("meter");
var dormitorios = document.getElementById("dorm");
var precio = document.getElementById("precio");
var metersTotal = document.getElementById("meters");
var banos = document.getElementById("banos");
var desc = document.getElementById("description");

function llenarFicha(o){
    title.innerText = o.title;
    price.innerText = "UF "+o.price;
    transa.innerText = o.transa;
    loadGaleria(o.imagenes);
    cod.innerText = o.codigo;
    m2.innerText = o.metrosUtiles;
    dormitorios.innerText = o.dormitorios;
    precio.innerText = o.price;
    metersTotal.innerText = o.metrosTotales;
    banos.innerText = o.banos;
    desc.innerText = o.description;
    precio.innerText = o.price + " UF";
}

function loadGaleria(imagenes){
    if(imagenes.length == 0){
        let img = document.createElement("div");
        img.classList = "swiper-slide";
        img.style.backgroundImage = "url(https://images.racc.es/static/foto-no-disponible.jpg)";
        galeria.appendChild(img);
    } else {
        imagenes.forEach(element => {
            let img = document.createElement("div");
            img.classList = "swiper-slide";
            img.style.backgroundImage = "url(" + element + ")";
            galeria.appendChild(img);
        });
    }
}

function loadSwiperGallery(){
    return new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
}