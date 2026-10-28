/*
======================
GESTION DE L'ENTETE
======================
*/

// Récupère l'entête de la page
const entete = document.querySelector("#entete");

// À chaque défilement de la page
window.addEventListener("scroll", function (e) {
    // scrollY = nombre de pixels défilés depuis le haut de la page
    if (window.scrollY > 50) {
        // Plus de 50px défilés : on ajoute la classe qui donne le fond blanc
        entete.classList.add("entete_fond");
    } else {
        // Sinon on la retire
        entete.classList.remove("entete_fond");
    }
});