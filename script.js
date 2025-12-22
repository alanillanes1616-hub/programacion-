document.addEventListener('DOMContentLoaded', () => {
    // Observador para animaciones de aparición
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // Animación del Navbar al Scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            nav.style.padding = "10px 0";
            nav.style.background = "rgba(10, 25, 47, 0.98)";
        } else {
            nav.style.padding = "18px 0";
            nav.style.background = "rgba(10, 25, 47, 0.95)";
        }
    });
});