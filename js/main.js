const burger = document.querySelector('.burger-button');
const navList = document.querySelector('.nav-right');
const links = Array.from(document.getElementsByClassName('nav-links'))

burger.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('active')
    burger.classList.toggle('active');
    navList.classList.toggle('active');
})
links.forEach(e => {
    e.addEventListener('click', () => {
        burger.classList.toggle('active');
        navList.classList.toggle('active');
        document.querySelector('nav').classList.toggle('active')
    })
})