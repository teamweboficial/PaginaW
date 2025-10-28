//Esto es para que se mantenga el color del menu en la siguiente pagina
const currentPath = decodeURIComponent(window.location.pathname.toLowerCase());

document.querySelectorAll('.menu a').forEach(link => {
  const href = decodeURIComponent(link.getAttribute('href').toLowerCase());

 
  const normalizedCurrent = currentPath.replace(/\/index\.html$/, '');
  const normalizedHref = href.replace(/\/index\.html$/, '');

  // Si la ruta actual incluye la del link, es el activo
  if (normalizedCurrent.includes(normalizedHref)) {
    link.classList.add('active');
  }
});
















//esto son las imagenes que van en transicion del princio...................................................................
  let currentIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      dots[i].classList.toggle('active', i === index);
    });
  }

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 10000); // Cambia cada 3 segundos





//esto son los cuadros que van desplazando a la izquierda



  const scrollSection = document.getElementById('horizontalScrollSection');
const horizontalWrapper = document.getElementById('horizontalWrapper');
let scrollPos = 0;

// ------------------ SCROLL CON MOUSE (PC) ------------------
scrollSection.addEventListener('wheel', (e) => {
  const maxScroll = horizontalWrapper.scrollWidth - window.innerWidth;

  // Solo evitamos el scroll vertical si todavía hay scroll horizontal que hacer
  if ((e.deltaY > 0 && scrollPos < maxScroll) || (e.deltaY < 0 && scrollPos > 0)) {
    e.preventDefault();

    scrollPos += e.deltaY;
    scrollPos = Math.max(0, Math.min(scrollPos, maxScroll));
    horizontalWrapper.style.transform = `translateX(${-scrollPos}px)`;
  }
}, { passive: false });

// ------------------ SCROLL CON TOUCH (MÓVILES) ------------------
let scstartX = 0;
let startScroll = 0;
let isTouching = false;

scrollSection.addEventListener('touchstart', (e) => {
  isTouching = true;
  startX = e.touches[0].clientX;
  startScroll = scrollPos;
});

scrollSection.addEventListener('touchmove', (e) => {
  if (!isTouching) return;

  const currentX = e.touches[0].clientX;
  const deltaX = startX - currentX;

  const maxScroll = horizontalWrapper.scrollWidth - window.innerWidth;
  scrollPos = startScroll + deltaX;
  scrollPos = Math.max(0, Math.min(scrollPos, maxScroll));

  horizontalWrapper.style.transform = `translateX(${-scrollPos}px)`;
});

scrollSection.addEventListener('touchend', () => {
  isTouching = false;
});





const fadeElements = document.querySelectorAll('.fade-slide');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

fadeElements.forEach(el => observer.observe(el));







//esto son las imagenes que van con la flecha......................................................................................


const track = document.querySelector('.carousel-track');
const leftButton = document.querySelector('.arrow.left');
const rightButton = document.querySelector('.arrow.right');
const cards = Array.from(track.children);
const pagination = document.querySelector('.pagination');

 currentIndex = 0;
let cardsPerView = 2;
let autoplayInterval;

// Crear paginación
function createPagination() {
  pagination.innerHTML = '';
  const pages = Math.ceil(cards.length / cardsPerView);
  for (let i = 0; i < pages; i++) {
    const dot = document.createElement('span');
    dot.classList.add('pagination-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      currentIndex = i * cardsPerView;
      updateCarousel();
      resetAutoplay();
    });
    pagination.appendChild(dot);
  }
}

// Actualizar paginación
function updatePagination() {
  const dots = document.querySelectorAll('.pagination-dot');
  dots.forEach(dot => dot.classList.remove('active'));
  const pageIndex = Math.floor(currentIndex / cardsPerView);
  if (dots[pageIndex]) dots[pageIndex].classList.add('active');
}

// Ajustar cantidad de tarjetas por pantalla
function updateCardsPerView() {
  if (window.innerWidth <= 600) {
    cardsPerView = 1;
  } else {
    cardsPerView = 2;
  }
  createPagination();
  updateCarousel();
}

// Mover el carrusel
function updateCarousel() {
    const cardWidth = track.querySelector('.card').offsetWidth; // ← cambialo a cada tarjeta
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    updatePagination();
  }
  

// Siguiente
function moveNext() {
    currentIndex += cardsPerView;
    if (currentIndex >= cards.length) {
      currentIndex = Math.max(0, cards.length - cardsPerView);
    }
    updateCarousel();
  }
  

// Anterior
function movePrev() {
    currentIndex -= cardsPerView;
    if (currentIndex < 0) {
      currentIndex = 0;
    }
    updateCarousel();
  }

// Botones
rightButton.addEventListener('click', () => {
  moveNext(1);
  resetAutoplay();
});

leftButton.addEventListener('click', () => {
  movePrev();
  resetAutoplay();
});

// Swipe
let startX = 0;
let isDragging = false;

track.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

track.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const moveX = e.touches[0].clientX;
  const diffX = startX - moveX;

  if (diffX > 50) {
    moveNext();
    resetAutoplay();
    isDragging = false;
  } else if (diffX < -50) {
    movePrev();
    resetAutoplay();
    isDragging = false;
  }
});

track.addEventListener('touchend', () => {
  isDragging = false;
});




// Inicializar
window.addEventListener('resize', updateCardsPerView);
updateCardsPerView();
startAutoplay();











// Este pequeño script coloca automáticamente el año actual
document.getElementById('year').textContent = new Date().getFullYear();