// SELECTING ELEMENTS
let addTaskBtn = document.querySelector("#addTaskBtn");
let taskList = document.querySelector("#taskList");

addTaskBtn.addEventListener("click", createTask);

function createTask() {
  // GETTING THE VALUE OF INPUT FIELD
  let inputTaskField = document.querySelector("#inputTaskField").value;
  if (!inputTaskField) {
    alert("ERROR!");
    return;
  }

  // CREATING ELEMENTS AND ASSIGNING CLASSES
  let taskDiv = document.createElement("div");
  taskDiv.classList.add("taskDiv");
  taskList.appendChild(taskDiv);

  let textParagraph = document.createElement("p");
  textParagraph.classList.add("textParagraph");

  let buttonDiv = document.createElement("div");
  buttonDiv.classList.add("buttonDiv");

  let editButton = document.createElement("i");
  editButton.classList.add(
    "bi",
    "bi-pencil-square",
    "icon-custom",
    "icon-edit"
  );

  let deleteButton = document.createElement("i");
  deleteButton.classList.add("bi", "bi-x-square", "icon-custom", "icon-delete");

  let completedTask = document.createElement("i");
  completedTask.classList.add(
    "bi",
    "bi-check-square",
    "icon-custom",
    "icon-complete"
  );

  // ASSIGNING ELEMENTS TO PARENT AS CHILDREN
  taskDiv.appendChild(textParagraph);
  taskDiv.appendChild(buttonDiv);
  buttonDiv.appendChild(editButton);
  buttonDiv.appendChild(deleteButton);
  buttonDiv.appendChild(completedTask);
  textParagraph.textContent = inputTaskField;

  // DELETING THE TEXT IN INPUT FIELD
  document.querySelector("#inputTaskField").value = "";

  deleteButton.addEventListener("click", onClickDelete);
  completedTask.addEventListener("click", onClickCompleted);
  editButton.addEventListener("click", onClickEdit);
}

function onClickEdit(event) {
  let taskDiv = event.target.closest(".taskDiv");
  let textParagraph = taskDiv.querySelector(".textParagraph");

  // Create an input field for editing
  let editInput = document.createElement("input");
  editInput.classList.add("textParagraph");
  editInput.type = "text";
  editInput.value = textParagraph.textContent;

  // Replace the text paragraph with the input field
  taskDiv.replaceChild(editInput, textParagraph);

  // Set focus on the input field
  editInput.focus();

  // Handle the blur event to save changes when focus is lost
  taskDiv.addEventListener("blur", function () {
    textParagraph.textContent = editInput.textContent;
    taskDiv.removeChild(editInput);
  });
}
function onClickCompleted(event) {
  event.target.classList.toggle("completedTask");
  let taskDiv = event.target.closest(".taskDiv");
  let textParagraph = taskDiv.querySelector(".textParagraph");
  textParagraph.classList.toggle("completedTask");
}
function onClickDelete(event) {
  let createdItem = event.target.closest("div");
  createdItem.parentElement.remove(createdItem);
  // Go brise noviot element od negoviot parent element
}

function initToDo() {
  addTaskBtn.addEventListener("click", createTask);
}

export { initToDo };
