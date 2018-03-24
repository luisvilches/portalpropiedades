var server = "http://localhost:5000";
var datas = [
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
    //console.log(getSessionParser(getSessionStorage()));
    var data = getSessionParser(getSessionStorage());
    //let Pag = 5;
    //let items = 3;
    

    fetch(server + "/filter/" +getParameterByName("page")+"/"+data.region+"/"+data.comuna+"/"+data.transa+"/"+data.type)
    .then(res => res.json())
    .then(response => {
        console.log(response.data.pages,response.data.current,response);
        createPagination(response.data.pages);
        pagToPag(getParameterByName("page"),response.data.current,response.data.products.length);
        parserData(response.data.products);
    })
});

//"/filter/:page/:region/:comuna/:transa/:type"