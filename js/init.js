var selectRegiones = document.getElementById("regiones");
var selectComunas = document.getElementById("comunas");
var btnFilter = document.getElementById("filter");

document.addEventListener('DOMContentLoaded', function(){
    poblarSelectRegiones();

    selectRegiones.addEventListener('change', () => {
        var sel = selectRegiones.options[selectRegiones.options.selectedIndex].value;
        poblarSelectComunas(sel);
    });

    btnFilter.addEventListener("click", applyFilter);

    fetch("http:localhost:5000/destacados")
    .then(res => res.json())
    .then(response => {
        poblarSlider(response.data);
        new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
                nextEl: '.next',
                prevEl: '.prev',
            },
        });
    })
});