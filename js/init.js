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
});