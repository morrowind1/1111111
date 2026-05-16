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
