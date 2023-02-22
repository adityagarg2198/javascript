const inputElement = document.getElementById("input");
const buttonElement = document.getElementById("addBtn");
const listElement = document.getElementById("todolist");
let todoItems;
let value;

inputElement.addEventListener("change", (e) => {
  value = e.target.value;
});

buttonElement.addEventListener("click", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  const checkButton = document.createElement("button");
  checkButton.textContent="Check";
  li.textContent=value;
  li.appendChild(checkButton);
  listElement.appendChild(li);
});
