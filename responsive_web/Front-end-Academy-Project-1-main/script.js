const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('navigation-menu');

toggle.addEventListener('click', () => {
  nav.classList.toggle('visible');
});
