const hamburger = document.querySelector(".hamburger");
const nav_menu = document.querySelector(".nav_menu");

hamburger.addEventListener("clic", () => {
    hamburger.classList.toggle("active");
    nav_menu.classList.toggle("active");
})

document.querySelectorAll(".nav_link").forEach(n => n.addEventListener("clic", () => {
    hamburger.classList.remove("active");
    nav_menu.classList.remove("active");
}))