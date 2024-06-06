const addTodo = (event) => {
 if (event.key === "Enter") {
  const todoItem = document.getElementById("todoInput").value;
  if (todoItem) {
   const todoList = document.getElementById("todoList");
   const todoItemElement = document.createElement("li");
   const todoClose = document.createElement("button");
   todoClose.onclick = () => {
    deleteButton(todoItemElement, todoClose);
   };
   todoClose.innerHTML = "X";
   todoItemElement.innerText = todoItem;
   todoList.appendChild(todoClose);
   todoList.appendChild(todoItemElement);
   document.getElementById("todoInput").value = "";
  }
 }
};

function deleteButton(item, button) {
 item.remove();
 button.remove();
}

document.getElementById("todoInput").addEventListener("keypress", addTodo);
