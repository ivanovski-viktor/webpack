//ako importirame default modul imeto moze da e kakvo bilo
import myCarousel from "./js/carousel.js";
//istoto samo bez default
// import { Carousel } from "./js/carousel.js";
import { initToDo } from "./js/todo.js";

const carousel = new myCarousel();
carousel.init();
initToDo();
