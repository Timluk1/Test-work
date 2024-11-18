export class AnimationsCards {
    constructor() {
        // Инициализация IntersectionObserver
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Элемент видим, добавляем класс
                    entry.target.classList.add("visible");
                } else {
                    // Элемент невидим, удаляем класс (если нужно)
                    entry.target.classList.remove("visible");
                }
            });
        });

        // Находим все элементы
        this.cards = document.querySelectorAll('.card');
        this.news = document.querySelectorAll('.news');

        // Начинаем отслеживать их
        this.addObserve(this.cards);
        this.addObserve(this.news);
    }

    addObserve(elements) {
        elements.forEach((element) => {
            this.observer.observe(element);
        });
    }
}
