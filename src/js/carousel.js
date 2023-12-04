let currentSlide = 0;
const totalSlides = document.querySelectorAll(".slide").length;
const carousel = document.querySelector(".carousel");
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");

const SLIDE_WIDTH = 100;

function showSlide(index) {
  if (totalSlides <= 1) {
    return;
  }

  currentSlide = (index + totalSlides) % totalSlides;
  carousel.style.transform = `translateX(${-currentSlide * SLIDE_WIDTH}%)`;
}

function changeSlide(direction) {
  currentSlide += direction;
  currentSlide = (currentSlide + totalSlides) % totalSlides;
  showSlide(currentSlide);
}
//splidejs za gotov slider koristenje

export { changeSlide, nextBtn, prevBtn };
