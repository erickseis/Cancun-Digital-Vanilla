const iconoMenu = document.querySelector('#icono-menu'),
  menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {

  // Alternamos estilos para el menú y body
  menu.classList.toggle('active');
  document.body.classList.toggle('opacity');

  // Alternamos su atributo 'src' para el ícono del menú
  const rutaActual = e.target.getAttribute('class');

  if (rutaActual == 'fa-solid fa-bars') {
    e.target.setAttribute('class', 'fa-regular fa-circle-xmark');
  } else {
    e.target.setAttribute('class', 'fa-solid fa-bars');
  }
});

{/* <i class="fa-regular fa-circle-xmark"></i> */ }