var server = "http://localhost:5000";

var id = document.getElementById("id");
var code = document.getElementById("code");
var title = document.getElementById("title");
var estracto = document.getElementById("estracto");
var description = document.getElementById("description");
var dormitorios = document.getElementById("dormitorios");
var banos = document.getElementById("banos");
var region = document.getElementById("region");
var comuna = document.getElementById("comuna");
var transa = document.getElementById("transa");
var type = document.getElementById("type");
var meters = document.getElementById("meters");
var metersUtils = document.getElementById("metersUtils");
var destacado = document.getElementById("destacado");
var save = document.getElementById("save");
var cover = document.getElementById("cover");
var gallery = document.getElementById("gallery");
var updateCover = document.getElementById("updateCover");
var addGallery = document.getElementById("addGallery");
var price = document.getElementById("price");

document.addEventListener("DOMContentLoaded", function(){
    fetch(server + "/ficha/" + getParameterByName("c"))
    .then(res => res.json())
    .then(response => {
        console.log(response);
        cargarData(response.data);
        galeria(response.data.images);

        save.addEventListener("click", function(e){
            e.preventDefault();
            update(response.data._id);
        })
    });
})


function galeria(arr){
    arr.forEach(element => {
       let tmp = `<td>
       <img src="${element.img}" class="img-fluid" alt="">
        </td>
        <td><a href="" data-deleteImg="${element._id}" class="btn btn-danger">x</a></td>`; 

        let td = document.createElement("tr");
        td.innerHTML = tmp;
        document.getElementById("gallery").appendChild(td);
    });
}
function cargarData(obj){
    id.value = obj._id;
    code.value = obj.code;
    title.value = obj.title;
    estracto.value = obj.estracto;
    description.value = obj.description;
    dormitorios.value = obj.dormitorios;
    banos.value = obj.banos;
    region.value = obj.region;
    comuna.value = obj.comuna;
    transa.value = obj.transa;
    type.value = obj.type;
    meters.value = obj.meters;
    metersUtils.value = obj.metersUtils;
    cover.src = obj.cover;
    destacado.checked = obj.destacado;
    price.value = obj.price;
}

function update(d){
    var f = new FormData();
    f.append("title",title.value);
    f.append("estracto",estracto.value);
    f.append("price",price.value);
    f.append("description",description.valu);
    f.append("dormitorios",dormitorios.value);
    f.append("banos",banos.value);
    f.append("region",region.value);
    f.append("comuna",comuna.value);
    f.append("transa",transa.value);
    f.append("type",type.value);
    f.append("meters",meters.value);
    f.append("metersUtils", metersUtils.value);
    f.append("destacado", destacado.checked ? true : false);

    fetch(server + "/update/" + d, {
        method:"put",
        body: f
    }).then(res => res.json())
    .then(respuesta => {
        console.log(respuesta);
    })
}   