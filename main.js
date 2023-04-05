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
const allRonds = document.querySelectorAll('.rond');
const allBoxes = document.querySelectorAll('.box');

const controller = new ScrollMagic.Controller()

allBoxes.forEach(box => {

    for(i = 0; i < allRonds.length; i++){

        if(allRonds[i].getAttribute('data-anim') === box.getAttribute('data-anim')){

            let tween = gsap.from(box, {y: -50, opacity: 0, duration: 0.5})

            let scene = new ScrollMagic.Scene({
                triggerElement: allRonds[i],
                reverse: false
            })
                .setTween(tween)
                // .addIndicators()
                .addTo(controller)

        }

    }

});

let doctitle = document.title;
window.addEventListener("blur", () => {
    document.title = "reviens ;(";
});

window.addEventListener("focus", () => {
    document.title = doctitle;
});