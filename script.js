// Animación de aparición suave
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.feature-card, .social-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});