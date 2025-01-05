// Variables
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');

// Abrir el modal
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex'; // Muestra el modal como un flexbox
});

// Cerrar el modal
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
