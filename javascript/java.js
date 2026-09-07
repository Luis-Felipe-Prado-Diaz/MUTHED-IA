document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu');
    const nav = document.querySelector('header .menu');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
   
});
