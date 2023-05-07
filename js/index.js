const navbar = document.getElementById("navbar");
function downScroll(){
    if (window.scrollY > 50) {
        navbar.classList.add("fixed-top");
    } else {
        navbar.classList.remove("fixed-top");
    }
}

window.addEventListener("scroll", downScroll);