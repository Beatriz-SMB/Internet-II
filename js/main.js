document.addEventListener('DOMContentLoaded', () => {

    const themeToggleButton = document.getElementById('theme-toggle');

    const bodyElement = document.body;

    themeToggleButton.addEventListener('click', () => {
        bodyElement.classList.toggle('light-mode');
    });

});