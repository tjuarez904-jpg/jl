// ---- MENÚ HAMBURGUESA ----
const hamburgerBtn = document.querySelector('.hamburger-btn');
const navMenu = document.getElementById('nav-menu');
const navOverlay = document.getElementById('nav-overlay');

/**
 * Abre el menú lateral y bloquea el scroll de la página
 */
function openMenu() {
  navMenu.classList.add('open');
  navOverlay.classList.add('active');
  hamburgerBtn.classList.add('active');
  hamburgerBtn.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

/**
 * Cierra el menú lateral y restaura el scroll de la página
 */
function closeMenu() {
  navMenu.classList.remove('open');
  navOverlay.classList.remove('active');
  hamburgerBtn.classList.remove('active');
  hamburgerBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

// Evento para abrir/cerrar desde el botón hamburguesa
hamburgerBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  if (navMenu.classList.contains('open')) {
    closeMenu();
  } else {
    openMenu();
  }
});

// Cerrar al hacer clic en el overlay (capa oscura de fondo)
navOverlay.addEventListener('click', closeMenu);

// Cerrar automáticamente al seleccionar cualquiera de los enlaces
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// ---- SMOOTH SCROLL (Desplazamiento suave para anclas) ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});