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

let togg2 = document.getElementById("togg2");
let d1 = document.getElementById("d1");
let d2 = document.getElementById("d2");
let d3 = document.getElementById("d3");
togg2.addEventListener("click", () => {
    if(getComputedStyle(d1).display != "none"){
        d1.style.display = "none";
    } else {
        d1.style.display = "flex";
    }
})
togg2.addEventListener("click", () => {
    if(getComputedStyle(d2).display != "none"){
        d2.style.display = "none";
    } else {
        d2.style.display = "flex";
    }
})
togg2.addEventListener("click", () => {
    if(getComputedStyle(d3).display != "none"){
        d3.style.display = "none";
    } else {
        d3.style.display = "flex";
    }
})

function changeText(){
    let element = document.getElementById("togg2");
    if (element.value=="Voir plus")
        element.value = "Voir moins";
    else
        element.value = "Voir plus";
}

document.addEventListener('DOMContentLoaded', function() {
    window.onscroll = function(ev) {
        document.getElementById("cRetour").className = (window.pageYOffset > 100) ? "cVisible" : "cInvisible";
    };
});