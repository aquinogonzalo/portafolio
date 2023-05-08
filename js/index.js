const navbar = document.getElementById("navbar");
function downScroll(){
    if (window.scrollY > 50) {
        navbar.classList.add("fixed-top");
    } else {
        navbar.classList.remove("fixed-top");
    }
}

window.addEventListener("scroll", downScroll);


const home = document.getElementById("home");

function viewportChange(){
    const windowWidth = window.innerWidth;
    if (windowWidth > 768) {
        home.classList.add("vh-100");
        home.classList.remove("viewport-normal");
    } else {
        home.classList.remove("vh-100");
        home.classList.add("viewport-normal");
    }
}

window.addEventListener("resize", viewportChange);