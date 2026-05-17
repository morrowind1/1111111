const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

const cards = document.querySelectorAll('.project-card, .skill-card');
cards.forEach((card) => {
    observer.observe(card);
});

const burger = document.getElementById('burger');
const nav = document.querySelector('nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('open');
    burger.classList.toggle('active');
});

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
        burger.classList.remove('active');
    });
});