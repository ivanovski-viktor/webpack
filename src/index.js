import {
  changeSlide,
  createNavCarousel,
  nextBtn,
  prevBtn,
} from "./js/carousel.js";
import { addTaskBtn, createTask } from "./js/todo.js";

//CreateNavCarousel
createNavCarousel();

//Carousel
nextBtn.addEventListener("click", () => changeSlide(1));
prevBtn.addEventListener("click", () => changeSlide(-1));

// nextBtn.addEventListener("hover", () => {nextBtn});
// prevBtn.addEventListener("hover", () => {});

//Todo
addTaskBtn.addEventListener("click", createTask);
