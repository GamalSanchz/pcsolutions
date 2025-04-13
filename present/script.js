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
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }
  
