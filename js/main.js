const openMenu = document.querySelector(".ri-menu-line")
const closeMenu = document.querySelector(".ri-close-fill")
const navMenu = document.querySelector("nav ul")

openMenu.addEventListener("click", function(){
    navMenu.style.top = "35%"
    openMenu.style.display = "none"
    closeMenu.style.display = "block"
})

closeMenu.addEventListener("click", function(){
    navMenu.style.top = "-35%"
    closeMenu.style.display = "none"
    openMenu.style.display = "block"
})