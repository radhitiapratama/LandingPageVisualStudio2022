// document.addEventListener("contextmenu", function (e) {
//     e.preventDefault();
// });

// document.addEventListener("keydown", function (e) {
//     if (
//         e.ctrlKey &&
//         e.keyCode == 67 ||
//         e.keyCode == 85 ||
//         e.keyCode == 86 ||
//         e.keyCode == 117 ||
//         e.keyCode == 123

//     ) {
//         e.preventDefault();
//     }
// });

// disabled draggable image
const images = document.querySelectorAll("img");
images.forEach(function (img) {
    img.setAttribute('draggable', false);
})

const hamburgerMenu = document.querySelector("nav .hamburger-menu");
const navItems = document.querySelector("nav .nav-items");

hamburgerMenu.addEventListener("click", function () {
    const active = document.querySelector(".nav-items.active");
    if (active) {
        active.classList.remove("active");
        return;
    }
    navItems.classList.add("active");
});