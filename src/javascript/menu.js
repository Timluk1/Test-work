// класс для отображения меню
export class Menu {
    constructor() {
        // получаем необходимые DOM элементы
        this.iconBurgerMenu = document.querySelector('.burger-menu');
        this.menu = document.querySelector('.menu');
        this.iconCloseMenu = document.getElementById('icon-close-menu');
        this.menuOverlay = document.querySelector('.menu-overlay');

        // вешаем слушатели событий
        this.addListeners();
    }

    // обработчики
    handleCloseMenu() {
        this.menuOverlay.classList.remove("active")
        this.menu.classList.remove('active');
    }
    handleOpenMenu(){
        this.menuOverlay.classList.add("active")
        this.menu.classList.add('active');
    }

    addListeners() {
        this.iconBurgerMenu.addEventListener("click", this.handleOpenMenu.bind(this));
        this.iconCloseMenu.addEventListener("click", this.handleCloseMenu.bind(this));
    }   
}