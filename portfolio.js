// Récupérer les éléments
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Ajouter l'événement de clic sur le bouton burger
menuToggle.addEventListener('click', () => {
    // Toggle la classe "active" sur le menu pour l'afficher/masquer
    menu.classList.toggle('active');
});