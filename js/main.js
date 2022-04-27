const burger = document.querySelector('.burger-button');
const navList = document.querySelector('.nav-right');
const linkList = document.getElementsByClassName('nav-links');
links = Array.from(linkList)

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navList.classList.toggle('active');
})
links.forEach(e => {
    e.addEventListener('click', () => {
        burger.classList.toggle('active');
        navList.classList.toggle('active');
    })
})