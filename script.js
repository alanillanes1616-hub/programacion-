document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    };

    window.addEventListener("scroll", revealOnScroll);

    // Inyectar estilos de animación
    const style = document.createElement('style');
    style.innerHTML = `
        .reveal { opacity: 0; transform: translateY(40px); transition: 1.2s all ease; }
        .reveal.active { opacity: 1; transform: translateY(0); }
    `;
    document.head.appendChild(style);
});