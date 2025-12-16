// --- Lógica de Animaciones al hacer Scroll (Intersection Observer) ---
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.animate-fade-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                // Obtiene el valor del data-delay (o 0 si no existe)
                const delay = element.getAttribute('data-delay') || 0; 
                
                // Aplicar el delay antes de mostrar la animación
                setTimeout(() => {
                    element.classList.add('is-visible');
                    // Deja de observar una vez que se activa para optimizar el rendimiento
                    observer.unobserve(element); 
                }, parseFloat(delay) * 1000); // Convierte el delay a milisegundos
            }
        });
    }, {
        // threshold: 0.2 significa que la animación se activa cuando el 20% del elemento es visible
        threshold: 0.2 
    });

    elementsToAnimate.forEach(el => observer.observe(el));
});