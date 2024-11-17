import './scss/index.scss';

const handleOpenMenu = (event) => {
    const menu = document.querySelector('.menu');
    const menuOverlay = document.querySelector('.menu-overlay')
    menuOverlay.classList.add("active")
    menu.classList.add('active');
}

const handleCloseMenu = (event) => {
    const menu = document.querySelector('.menu');
    const menuOverlay = document.querySelector('.menu-overlay')
    menuOverlay.classList.remove("active")
    menu.classList.remove('active');
}

const menu = document.querySelector('.burger-menu');
const close = document.getElementById('icon-close-menu');
menu.addEventListener("click", handleOpenMenu);
close.addEventListener("click", handleCloseMenu);