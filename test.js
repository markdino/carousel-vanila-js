const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const carousel = document.getElementById("carousel");
const buttonWrapper = document.getElementById("buttonWrapper");

function updateButtons() {
  prevButton.disabled = carousel.scrollLeft === 0;
  nextButton.disabled =
    carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth;
  buttonWrapper.style.display =
    carousel.clientWidth === carousel.scrollWidth ? "none" : "flex";
}

prevButton.addEventListener("click", () => {
  carousel.scrollBy({
    left: -carousel.clientWidth,
    behavior: "smooth",
  });
});

nextButton.addEventListener("click", () => {
  carousel.scrollBy({
    left: carousel.clientWidth,
    behavior: "smooth",
  });
});

// Update buttons when the user scrolls
carousel.addEventListener("scroll", updateButtons);

// Initially update the buttons
updateButtons();
