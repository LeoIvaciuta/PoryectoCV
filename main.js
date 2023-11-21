
/* offset().top es para saber la distancia entre un objeto y la parte superior*/

document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.div-nav');
    var altura = navbar.offsetTop;

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > altura) {
            navbar.classList.add('div-nav-fixed');
        } else {
            navbar.classList.remove('div-nav-fixed');
        }
    });
});

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

/**/
abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

