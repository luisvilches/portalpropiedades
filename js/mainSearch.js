document.addEventListener("DOMContentLoaded", function(){
    console.log(getSessionParser(getSessionStorage()));
    let Pag = 5;
    let items = 3;
    createPagination(Pag);
    pagToPag(getParameterByName("page"),Pag,items);
});