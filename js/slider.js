const slider = document.querySelector(".slider");
const cards = document.querySelectorAll(".cardone");
const wrapper = document.querySelector(".slider-wrapper");
const dotsContainer = document.querySelector(".dots");

let index = 0;
let autoPlayInterval;

// Create dots dynamically
cards.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if(i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => {
    index = i;
    updateSlider();
    resetAutoplay();
  });
  dotsContainer.appendChild(dot);
});

// Get card width dynamically
function getCardWidth() {
  return cards[0].getBoundingClientRect().width + 20; // 20 = margin
}

// Update slider position and active card
function updateSlider() {
  let cardWidth = getCardWidth();
  slider.style.transform = `translateX(-${index * cardWidth}px)`;
  cards.forEach((card, i) => card.classList.toggle("active", i === index));
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
}

// Next slide
function nextSlide() {
  index = (index + 1) % cards.length;
  updateSlider();
}

// Autoplay
function startAutoplay() {
  autoPlayInterval = setInterval(nextSlide, 3000);
}

// Reset autoplay on manual action
function resetAutoplay() {
  clearInterval(autoPlayInterval);
  startAutoplay();
}

startAutoplay();

// Pause on hover
wrapper.addEventListener("mouseenter", () => clearInterval(autoPlayInterval));
wrapper.addEventListener("mouseleave", () => startAutoplay());
