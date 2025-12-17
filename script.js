// Cambiar el estilo de la barra de navegación al hacer scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#ffffff';
        navbar.style.padding = '10px 5%';
        navbar.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
    } else {
        navbar.style.background = '#ffffff';
        navbar.style.padding = '20px 5%';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});