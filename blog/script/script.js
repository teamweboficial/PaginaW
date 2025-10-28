const menu = document.getElementById("menu");
  const button = document.getElementById("menu-btn");

  function toggleMenu() {
    if (menu.style.display === "flex") {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
    }
  }

  // Cierra el menú si se hace clic fuera
  document.addEventListener("click", function (event) {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnButton = button.contains(event.target);

    if (!isClickInsideMenu && !isClickOnButton) {
      menu.style.display = "none";
    }
  });

  // Cierra el menú si se hace clic en un enlace
  document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
      menu.style.display = "none";
    });
  });

  // ------------------------------
  // ✅ Rotación del trending ticker
  // ------------------------------
  const items = document.querySelectorAll(".ticker-item");
  let currentIndex = 0;

  function rotateTicker() {
    items.forEach((item, i) => {
      item.classList.toggle("active", i === currentIndex);
    });

    currentIndex = (currentIndex + 1) % items.length;
  }

  // Inicia la rotación
  setInterval(rotateTicker, 4000);


  // Cierra el menú si se hace clic fuera de él o del botón ☰
  document.addEventListener("click", function (event) {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnButton = button.contains(event.target);

    if (!isClickInsideMenu && !isClickOnButton) {
      menu.style.display = "none";
    }
  });

  // Cierra el menú si se hace clic en cualquier enlace del menú
  document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
      menu.style.display = "none";
    });
  });




















  (function () {
  const slider = document.getElementById('slider');
  const dotsContainer = document.getElementById('dots');
  const totalSlides = slider.children.length;
  let currentIndex = 0;

  function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
  }

  function updateDots() {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('span');
      dot.className = 'dot' + (i === currentIndex ? ' active' : '');
      dot.onclick = () => {
        currentIndex = i;
        updateSlider();
      };
      dotsContainer.appendChild(dot);
    }
  }

  // Botones globales
  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;

  // Inicializar
  updateSlider();
})();


































function mostrarSeccion(index) {
    const secciones = document.querySelectorAll(".seccion-contenido");
    const botones = document.querySelectorAll(".menu-btn");

    secciones.forEach((sec, i) => {
      sec.classList.toggle("active", i === index);
      botones[i].classList.toggle("active", i === index);
    });
  }