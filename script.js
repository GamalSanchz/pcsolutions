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
// Cierra el menú si está abierto cuando se abre una modal
function closeHamburgerMenu() {
  const menu = document.querySelector('.menu');
  if (menu.classList.contains('show')) {
    menu.classList.remove('show');
  }
}

// Cuando abres una modal:
function openModal(id) {
  closeHamburgerMenu(); // <- Cierra el menú antes de abrir modal
  document.getElementById(id).style.display = 'block';
}

// O si ya usas funciones separadas:
document.querySelectorAll('.modal-button').forEach(btn => {
  btn.addEventListener('click', () => {
    closeHamburgerMenu();
  });
});
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.menu').classList.remove('show');
  });
});
