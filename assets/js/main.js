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

const images = document.querySelectorAll("img");
images.forEach(function (img) {
    img.setAttribute('draggable', false);
})