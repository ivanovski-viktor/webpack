let currentSlide = 0;
const totalSlides = document.querySelectorAll(".slide").length;

const carouselNav = document.querySelector(".carousel_nav");
const carousel = document.querySelector(".carousel");
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");

function createNavCarousel() {
  for (let i = 0; i < totalSlides; i++) {
    let newBtn = document.createElement("span");
    carouselNav.appendChild(newBtn);
    if (i === 0) {
      newBtn.classList.add("carousel_button_selected");
    }
    newBtn.classList.add("carousel_button");
    newBtn.setAttribute("data-index", i);
    newBtn.addEventListener("click", () => {
      showSlide(i);
    });
  }
}

function showSlide(index) {
  // Remove the .carousel_button_selected class from all buttons
  const buttons = document.querySelectorAll(".carousel_button");
  buttons.forEach((button) =>
    button.classList.remove("carousel_button_selected")
  );

  // Add the .carousel_button_selected class to the button associated with the current slide
  const currentButton = document.querySelector(`[data-index="${index}"]`);
  currentButton.classList.add("carousel_button_selected");

  if (totalSlides <= 1) {
    return;
  }

  currentSlide = (index + totalSlides) % totalSlides;
  carousel.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function changeSlide(direction) {
  const newIndex = (currentSlide + direction + totalSlides) % totalSlides;
  showSlide(newIndex);
}
//splidejs za gotov slider koristenje

export { changeSlide, nextBtn, prevBtn, createNavCarousel };

//WHEN I CLICK A NAV BUTTON I WANT IT TO NAVIGATE TO A PICTURE
