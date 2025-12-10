import { displayTodos } from "../modules/displayTodos.js";

async function fetchTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  displayTodos(data.slice(0, 20)); // show first 20
}

// Check login
const user = JSON.parse(localStorage.getItem("user"));
if (!user) {
  alert("Please login first!");
  window.location.href = "login.html";
} else {
  fetchTodos();
}
