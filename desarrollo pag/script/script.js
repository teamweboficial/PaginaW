const cards = document.querySelectorAll('.card');
const overlay = document.getElementById('overlay');
const fullscreenImage = document.getElementById('fullscreenImage');
const fullscreenDescription = document.getElementById('fullscreenDescription');
const fullscreenLink = document.getElementById('fullscreenLink');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const img = card.querySelector('img')?.src;
    const link = card.querySelector('a');

    if (!link) return;

    const description = link.dataset.description || '';
    const buttonColor = link.dataset.buttonColor || '#007bff';
    const buttonText = link.dataset.buttonText || 'Ver más';

    fullscreenImage.src = img;
    fullscreenDescription.textContent = description;
    fullscreenLink.href = link.href;
    fullscreenLink.textContent = buttonText;
    fullscreenLink.style.backgroundColor = buttonColor;

    overlay.style.display = 'flex';
  });
});

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.style.display = 'none';
  }
});






// Aplica color hover dinámico según el data-button-color
document.querySelectorAll('.card a').forEach(link => {
  const color = link.dataset.buttonColor;
  link.addEventListener('mouseenter', () => {
    link.style.color = color;
  });
  link.addEventListener('mouseleave', () => {
    link.style.color = "black";
  });
});











