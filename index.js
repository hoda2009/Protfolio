
window.addEventListener("scroll",nav);
function nav(){
    const navbar=document.querySelector("nav");
    if(window.scrollY>800){
        navbar.classList.add("scrolled"); /*here i use it to add a class*/
    }
    else{
        navbar.classList.remove("scrolled")
    }

}
const loader=document.getElementById("preloader")
window.addEventListener("load",hidePreLoader);
function hidePreLoader(){
    loader.style.display="none";
    

}