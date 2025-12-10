document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.username === username && user.password === password) {
    alert("Login successful!");
    window.location.href = "todos.html";
  } else {
    alert("Invalid credentials!");
  }
});
