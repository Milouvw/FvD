// JavaScript Document
const menuButton = document.querySelector("header button");
const deNav = document.querySelector("header nav");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
menuButton.onclick = Menu;

// stap 3: voeg in de functie een class toe aan de nav
function Menu() {
  deNav.classList.toggle("is-open");
}