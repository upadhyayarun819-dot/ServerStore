// Login Page
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".login-form");
  const errorMsg = document.getElementById("error-msg");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Simple check
      if (username === "player" && password === "minecraft123") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "store.html";
      } else {
        errorMsg.textContent = "Invalid username or password!";
        errorMsg.style.color = "red";
      }
    });
  }

  // Store Page functions
  if (window.location.pathname.endsWith("store.html")) {
    if (localStorage.getItem("loggedIn") !== "true") {
      window.location.href = "index.html";
    }
  }
});

function buyItem(itemName) {
  alert(`You bought: ${itemName}`);
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}
