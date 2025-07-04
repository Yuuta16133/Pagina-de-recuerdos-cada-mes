document.addEventListener('DOMContentLoaded', () => {
    const surpriseButton = document.getElementById('surpriseButton');

    surpriseButton.addEventListener('click', () => {
        // Redirige a la página de celebración de los 2 meses
        window.location.href = 'nuestro_2do_mes.html';
    });
});