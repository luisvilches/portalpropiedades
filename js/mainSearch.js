var data = [
    {
        cover:"http://www.schumacherpropiedades.com/assets/img/propiedades/17393_IMG_7946_20180213114142.jpg",
        dormitorios:2,
        banos:1,
        meters:55,
        titulo:"Casa en Quilicura",
        description:"Casa sector Antipurén Alto, con características de condominio (pasaje cerrado), muy segura, cercana a colegios y supermercados.",
        codigo: "abc123"
    }
]
document.addEventListener("DOMContentLoaded", function(){
    console.log(getSessionParser(getSessionStorage()));
    let Pag = 5;
    let items = 3;
    createPagination(Pag);
    pagToPag(getParameterByName("page"),Pag,data.length);
    parserData(data);
});