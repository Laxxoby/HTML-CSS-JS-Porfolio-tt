function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Una vez cargado el DOM se crea los eventos .onclick

document.addEventListener('DOMContentLoaded', function () { 
    const menuLinks = document.querySelectorAll('.menu-links a');

    document.querySelector('.hamburger-icon').onclick = toggleMenu;

    menuLinks.forEach(li => {
        li.onclick = toggleMenu;
    })
});