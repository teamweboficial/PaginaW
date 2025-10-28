//Esto es para que se mantenga el color del menu en la siguiente pagina
const currentPath = decodeURIComponent(window.location.pathname.toLowerCase());

document.querySelectorAll('.menu a').forEach(link => {
  const href = decodeURIComponent(link.getAttribute('href').toLowerCase());

  // Elimina "/index.html" para comparar solo la carpeta base
  const normalizedCurrent = currentPath.replace(/\/index\.html$/, '');
  const normalizedHref = href.replace(/\/index\.html$/, '');

  // Si la ruta actual incluye la del link, es el activo
  if (normalizedCurrent.includes(normalizedHref)) {
    link.classList.add('active');
  }
});







//esto es para que salga el texto con la flecha
document.querySelectorAll('.card-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const text = button.nextElementSibling;
    text.classList.toggle('open');
    
    // Animación de salto
    button.classList.add('jump');
    setTimeout(() => button.classList.remove('jump'), 500);
  });
});











