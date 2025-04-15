document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mainMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("show");
    });
  }

  // Cerrar menú al hacer clic en links
  document.querySelectorAll('#mainMenu .nav-item, .menu a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('show');
    });
  });

  // Cierra al hacer clic fuera del contenido del modal
  window.onclick = function (event) {
    const modals = document.querySelectorAll('.modal, .brand-modal');
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  };

  // Botones que abren modales
  document.querySelectorAll('.modal-button').forEach(btn => {
    btn.addEventListener('click', () => {
      closeHamburgerMenu();
    });
  });
});

function closeHamburgerMenu() {
  const menu = document.querySelector('.menu');
  if (menu.classList.contains('show')) {
    menu.classList.remove('show');
  }
}

function openModal(id) {
  closeHamburgerMenu(); // ← Cierra el menú
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'block';
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'none';
  }
}
