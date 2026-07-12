const menuBtn = document.getElementById("menu-btn");
const navBar = document.getElementById("nav-bar");
const icon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {

    navBar.classList.toggle("active");

    if(navBar.classList.contains("active")){
        icon.className = "bx bx-x";
    }else{
        icon.className = "bx bx-menu";
    }

});