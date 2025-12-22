document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Estilo inyectado para la animación
    const style = document.createElement('style');
    style.innerHTML = `
        .reveal { opacity: 0; transform: translateY(40px); transition: 1.2s cubic-bezier(0.17, 0.67, 0.83, 0.67); }
        .reveal.visible { opacity: 1; transform: translateY(0); }
    `;
    document.head.appendChild(style);
});