document.addEventListener("DOMContentLoaded", function(){
    let title = "Departamento de 2D y 1B Santiago";
    let price = "2.350";
    let desc = "Casa sector Antipurén Alto, con características de condominio (pasaje cerrado), muy segura, cercana a colegios y supermercados.";
    llenarFicha({
        title:title,
        price:price,
        transa: "venta",
        codigo:"ODP3040",
        metrosUtiles: "44",
        dormitorios: "2",
        metrosTotales:"44.29",
        banos: "1",
        description:desc,
        imagenes:["http://deplanos.com/wp-content/uploads/2016/08/Casa.jpeg","http://gpi-blog.s3.amazonaws.com/wp-content/uploads/2014/03/casa.jpg"]
    });


    loadSwiperGallery();
});