document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

document.addEventListener("keydown", function (e) {
    if (
        e.ctrlKey &&
        e.keyCode == 67 ||
        e.keyCode == 85 ||
        e.keyCode == 86 ||
        e.keyCode == 117 ||
        e.keyCode == 123

    ) {
        e.preventDefault();
    }
});

const calendar = $(".calendar").evoCalendar({
    theme: "Midnight Blue"
})

const themeBox = document.querySelectorAll(".theme-box");
themeBox.forEach(function (box) {
    box.addEventListener('click', function (el) {
        let selectedTheme = el.target.dataset.theme;
        calendar.evoCalendar("setTheme", `${selectedTheme}`)
    });
});

const hamburgerMenu = document.querySelector("nav .hamburger-menu");
const navItems = document.querySelector("nav .nav-items");
const navlistItems = document.querySelectorAll(".nav-items li a");

hamburgerMenu.addEventListener("click", function () {
    const active = document.querySelector(".nav-items.active");
    if (active) {
        active.classList.remove("active");
        return;
    }
    navItems.classList.add("active");
});

navlistItems.forEach(function (lists) {
    lists.addEventListener("click", function (el) {
        navItems.classList.remove("active");
    })
})

const boxesTheme = document.querySelectorAll(".change-theme-wrapper .theme-box");
boxesTheme.forEach(function (box) {
    box.addEventListener("click", function (el) {
        const classTheme = el.target.dataset.class_theme;
        const activeTheme = document.querySelector(".theme-box.active");
        const prevTheme = activeTheme.dataset.class_theme;

        activeTheme.classList.remove("active");
        activeTheme.classList.remove(prevTheme);

        el.target.classList.add(classTheme);
        el.target.classList.add("active");

    });
});

