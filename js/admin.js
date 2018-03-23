document.addEventListener("DOMContentLoaded", function(){
    fetch("http://localhost:5000/adminall")
    .then(res => res.json())
    .then(response => {
        cargarPropiedades(response.data);
    })
})




function cargarPropiedades(arr){
    arr.forEach(i => {
        let tmp = `<div class="cell" data-title="ID">${i._id}</div>
        <div class="cell" data-title="código">${i.code}</div>
        <div class="cell" data-title="Titulo">${i.title}</div>
        <div class="cell" data-title="Comuna">${i.comuna}</div>
        <div class="cell" data-title="Accion">
            <a href="property.html?c=${i.code}" class="btn btn-primary"><i class="fas fa-eye"></i></a>
            <a href="#" class="btn btn-danger" data-delete="${i._id}"><i class="fas fa-trash-alt"></i></a>
        </div>`;

        let row = document.createElement("div");
        row.classList = "row";
        row.innerHTML = tmp;
        document.getElementById("table").appendChild(row);
    });
}


