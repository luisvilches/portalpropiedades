var nav = document.querySelector(".navbar");
window.addEventListener("scroll", function(){
    if(document.body.scrollTop < 40){
        nav.classList.remove("nav-min");
    } else {
        nav.classList.add("nav-min");
    }
})