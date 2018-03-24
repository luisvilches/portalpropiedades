var server = "http://localhost:5000";

document.addEventListener("DOMContentLoaded", function(){
    fetch(server + "/ficha/" + getParameterByName("cod"))
    .then(res => res.json())
    .then(response => {
        console.log(response);
        llenarFicha({
            title:response.data.title,
            price:response.data.price,
            transa:response.data.transa,
            codigo:response.data.code,
            metrosUtiles: response.data.metersUtils,
            dormitorios: response.data.dormitorios,
            metrosTotales:response.data.meters,
            banos: response.data.banos,
            description:response.data.description,
            imagenes:response.data.images
        });
    
    
        loadSwiperGallery();
    })
});