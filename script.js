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
});// Efecto de aparición del mensaje del Chatbot con retraso
setTimeout(() => {
    const chatPop = document.querySelector('.chat-pop');
    if(chatPop) {
        chatPop.style.opacity = '1';
        chatPop.style.transform = 'translateY(0)';
    }
}, 3000); 

// Agrega este estilo al CSS para que empiece oculto
// .chat-pop { opacity: 0; transform: translateY(20px); transition: 0.5s; }