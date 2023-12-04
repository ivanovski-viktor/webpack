import { changeSlide, nextBtn, prevBtn } from "./js/carousel.js";
console.log("Start");

export { addTaskBtn, createTask } from "./js/todo.js";

//Carousel
nextBtn.addEventListener("click", () => changeSlide(1));
prevBtn.addEventListener("click", () => changeSlide(-1));

//Todo
addTaskBtn.addEventListener("click", createTask);
