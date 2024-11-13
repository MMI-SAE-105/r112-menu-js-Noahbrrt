// On cible les éléments à modifier
const toggle = document.querySelector(".menu-btn"); // Cible le bouton du menu
const nav = document.querySelector(".header__menu"); // Cible le menu de navigation

// Ajoute un écouteur d'événements à l'élément 'toggle' qui écoute les événements 'click'.
toggle.addEventListener("click", () => {
  // Mise à jour des attributs ARIA pour accessibilité
  nav.setAttribute("aria-hidden", nav.getAttribute("aria-hidden") === "true" ? "false" : "true");
  toggle.setAttribute("aria-expanded", toggle.getAttribute("aria-expanded") === "true" ? "false" : "true");
});