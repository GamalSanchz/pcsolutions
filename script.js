// Abre el modal
function openModal(id) {
  document.getElementById(id).style.display = 'block';
}

// Cierra el modal
function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// Cierra al hacer clic fuera del contenido del modal
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal, .brand-modal'); // ✅ Incluye ambas clases
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}
/// Script para menú hamburguesa
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mainMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("show");
    });
  }
});
document.querySelectorAll('#mainMenu .nav-item').forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('show');
  });
});
