const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const carousel = document.getElementById("carousel");
const buttonWrapper = document.getElementById("buttonWrapper");

carousel.style.overflow = "unset";
let positionOffset = 0;

function updateButtons() {
  prevButton.disabled = positionOffset >= 0;
  nextButton.disabled =
    carousel.scrollWidth + positionOffset <= carousel.clientWidth;
  buttonWrapper.style.display =
    carousel.clientWidth === carousel.scrollWidth ? "none" : "flex";
}

function slideCarousel(offset) {
  positionOffset += offset;
  carousel.style.transform = `translateX(${positionOffset}px)`;
  updateButtons();
}

function reset() {
  positionOffset = 0;
  slideCarousel(0);
}

prevButton.addEventListener("click", () => {
  slideCarousel(carousel.clientWidth);
});

nextButton.addEventListener("click", () => {
  slideCarousel(-carousel.clientWidth);
});

// Reset state and postion on window resize, for testing purposes
window.addEventListener("resize", reset);

// Initially update the buttons
updateButtons();
