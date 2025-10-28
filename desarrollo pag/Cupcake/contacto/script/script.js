const menuBtn = document.getElementById('menuBtn');
  const menu = document.getElementById('menu');

  menuBtn.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  });

  // Cierra el menú si haces clic fuera (solo en móvil)
  document.addEventListener('click', function(e) {
    if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
      if (window.innerWidth < 768) {
        menu.style.display = 'none';
      }
    }
  });

  // Al cambiar tamaño de ventana, ajusta el menú correctamente
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      menu.style.display = 'flex';
    } else {
      menu.style.display = 'none';
    }
  });

  // Inicializa el estado correcto al cargar
  window.addEventListener('load', () => {
    if (window.innerWidth >= 768) {
      menu.style.display = 'flex';
    } else {
      menu.style.display = 'none';
    }
  });