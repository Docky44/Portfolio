const typed = new Typed(".multiple-text", {
    strings : ["Etudiant", "Développeur"],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay: 1000,
    loop : true
});

const menuToggle = document.querySelector('#menuToggle');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('expand');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('expand');
        menuToggle.querySelector('input').checked = false;
    });
});

document.addEventListener('click', (event) => {
    const isClickInside = navbar.contains(event.target) || menuToggle.contains(event.target);
    if (!isClickInside) {
        navbar.classList.remove('expand');
        menuToggle.querySelector('input').checked = false;
    }
});