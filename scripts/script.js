// JavaScript Document

// menu
const menuButton = document.querySelector("header button");
const deNav = document.querySelector("header nav");

menuButton.onclick = Menu;


function Menu() {
  deNav.classList.toggle("is-open");
}

const hamMenu = document.querySelector(".ham-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});




//suprise egg

const eggs = document.querySelectorAll(".easter-egg");


eggs.forEach(egg => {                               // Klik op elk ei
  egg.addEventListener("click", () => {
    egg.style.display = "none";                     // Ei laten verdwijnen
    
    for (let i = 0; i < 30; i++) {                  // Confetti maken
      maakConfetti();
    }
  });
});


function maakConfetti() {                         // Confetti functie
  const confetti = document.createElement("div");
  confetti.className = "confetti";

  confetti.style.left = Math.random() * window.innerWidth + "px";           // Random positie
  confetti.style.top = Math.random() * window.innerHeight + "px";

  document.body.appendChild(confetti);

  setTimeout(() => {                                // Confetti opruimen
    confetti.remove();
  }, 1000);
}