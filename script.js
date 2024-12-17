document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu'); // Кнопка бургер-меню
    const gLinks = document.querySelector('.g_links'); // Список навигации

    // Добавляем обработчик события на кнопку бургер-меню
    burgerMenu.addEventListener('click', () => {
        // Переключаем класс 'active' у навигационного меню
        gLinks.classList.toggle('active');
    });
});