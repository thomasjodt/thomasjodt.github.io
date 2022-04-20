const burger = document.querySelector('.burger-button');
const navList = document.querySelector('.nav-right');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navList.classList.toggle('active');
})