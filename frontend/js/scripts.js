/* =========================================
   MENU HAMBURGUESA
========================================= */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

function openMenu() {
  navMenu.classList.add("active");
  hamburger.style.display = "none";
}

function closeMenu() {
  navMenu.classList.remove("active");
  hamburger.style.display = "flex";
}

if (hamburger && navMenu) {

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    openMenu();
  });

  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      closeMenu();
    }
  });

  const navLinks = navMenu.querySelectorAll("a");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });
}

function abrirImagen(img){
  document.getElementById("visor").style.display="flex";
  document.getElementById("imagenGrande").src = img.src;
}

function cerrarImagen(){
  document.getElementById("visor").style.display="none";
}